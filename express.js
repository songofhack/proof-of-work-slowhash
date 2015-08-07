var express = require('express');
var app = express();

//
// 简单数据存储
//
var fs = require('fs');
var table = {};
var changed = false;

try {
	table = require('./client/record.json');
} catch(e) {}

setInterval(function() {
	if (changed) {
		changed = false;
		fs.writeFile('./client/record.json', JSON.stringify(table));
	}
}, 5000);

function hasRecord(key) {
	return key in table;
}
function readRecord(key) {
	return table[key];
}
function writeRecord(key, record) {
	table[key] = record;
	changed = true;
}
function invalidateRecord() {
	changed = true;
}



/**
 * 检测用户名可用
 */
app.get('/ajax_checkname', function(req, res) {
	var user = req.query['user'];
	if (!user) {
		return res.send('invalid param');
	}

	if (hasRecord(user)) {
		res.send({success: false});
	} else {
		res.send({success: true});
	}
});


/**
 * 注册
 */
app.get('/ajax_reg', function(req, res) {
	var param = req.query;

	var user = param['user'];
	var pwd = param['pwd'];
	var salt = param['salt'];
	var turn = +param['turn'];

	// param error
	if (!user || !pwd || !salt || !turn) {
		return res.send('invalid param');
	}
	if (user.length > 16) {
		return res.send('invalid username');
	}
	if (pwd.length != 32) {
		return res.send('invalid password');
	}
	if (salt.length != 8) {
		return res.send('invalid salt');
	}
	if (turn < 0) {
		return res.send('invalid turn');
	}

	// logic error
	if (hasRecord(user)) {
		res.send({
			success: false,
			reason: 'registered'
		});
		return;
	}

	var record = {
		pwd: pwd,
		salt: salt,
		turn: turn,

		last_addr: req.connection.remoteAddress,
		last_time: Date.now(),
		login_ok: 0,
		login_fail: 0,
	};
	writeRecord(user, record);

	console.log('new user: %s', user);

	return res.send({success: true});
});


/**
 * 获取登录参数
 */
app.get('/ajax_getinfo', function(req, res) {
	var user = req.query['user'];
	if (!user) {
		return res.send('invalid param');
	}

	var record = readRecord(user);
	if (!record) {
		res.send({
			success: false,
			reason: 'unregistered'
		});
		return;
	}

	res.send({
		success: true,
		salt: record.salt,
		turn: record.turn
	});
});


/**
 * 登录
 */
app.get('/ajax_login', function(req, res) {
	var param = req.query;

	var user = param['user'];
	var pwd = param['pwd'];

	// not registered
	var record = readRecord(user);
	if (!record) {
		return res.send('fail');
	}

	if (record['pwd'] == pwd) {
		record['login_ok']++;
		record['last_addr'] = req.connection.remoteAddress;
		res.send({success: true});
	}
	else {
		record['login_fail']++;
		res.send({
			success: false,
			reason: 'incorrect'
		});
	}

	invalidateRecord();
});


/**
 * 静态文件
 */
app.use(express.static(__dirname + '/client'));

app.listen(8080, '0.0.0.0');
