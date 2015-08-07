//
// 为简单演示，本例不提供 Flash 版本
//
function slowhash(input, time, turn, callback) {
    var worker = new Worker('worker.js');

    worker.onmessage = function(e) {
        callback(e.data);
    };

    worker.postMessage({
        input: input,
        time: time,
        turn: turn
    });
}
