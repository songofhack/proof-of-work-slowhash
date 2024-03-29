"use strict";

var gHeap = new ArrayBuffer(32);


var ASM = (function(stdlib, foreign, heap) {
    "use asm";

    var HEAP32 = new stdlib.Uint32Array(heap);


    function wa(a, b, c, d) {
        a = a | 0;
        b = b | 0;
        c = c | 0;
        d = d | 0;
        var e = 0
          , f = 0
          , g = 0
          , h = 0
          , i = 0
          , j = 0
          , k = 0;
        e = 0;
        do {
            k = a + -680876937 | 0;
            k = k >>> 25 | k << 7;
            g = k + -271733879 | 0;
            j = b + -117830708 + (271733878 - k & -1732584194 | g & -271733879) | 0;
            j = (j >>> 20 | j << 12) + g | 0;
            f = c + -1126478375 + (j & -271733879 ^ -271733879 | j & g) | 0;
            f = (f >>> 15 | f << 17) + j | 0;
            g = d + -1316259209 + (g & ~f | f & j) | 0;
            g = (g >>> 10 | g << 22) + f | 0;
            k = k + -448152648 + (j & ~g | g & f) | 0;
            k = (k >>> 25 | k << 7) + g | 0;
            j = j + 1200080426 + (f & ~k | k & g) | 0;
            j = (j >>> 20 | j << 12) + k | 0;
            f = f + -1473231341 + (g & ~j | j & k) | 0;
            f = (f >>> 15 | f << 17) + j | 0;
            g = g + -45705983 + (k & ~f | f & j) | 0;
            g = (g >>> 10 | g << 22) + f | 0;
            k = k + 1770035416 + (j & ~g | g & f) | 0;
            k = (k >>> 25 | k << 7) + g | 0;
            j = j + -1958414417 + (f & ~k | k & g) | 0;
            j = (j >>> 20 | j << 12) + k | 0;
            f = f + -42063 + (g & ~j | j & k) | 0;
            f = (f >>> 15 | f << 17) + j | 0;
            g = g + -1990404162 + (k & ~f | f & j) | 0;
            g = (g >>> 10 | g << 22) + f | 0;
            k = k + 1804603682 + (j & ~g | g & f) | 0;
            k = (k >>> 25 | k << 7) + g | 0;
            j = j + -40341101 + (f & ~k | k & g) | 0;
            j = (j >>> 20 | j << 12) + k | 0;
            i = ~j;
            f = f + -1502002162 + (g & i | j & k) | 0;
            f = (f >>> 15 | f << 17) + j | 0;
            h = ~f;
            g = g + 1236535329 + (k & h | f & j) | 0;
            g = (g >>> 10 | g << 22) + f | 0;
            i = b + -165796510 + k + (g & j | f & i) | 0;
            i = (i >>> 27 | i << 5) + g | 0;
            h = j + -1069501632 + (i & f | g & h) | 0;
            h = (h >>> 23 | h << 9) + i | 0;
            f = f + 643717713 + (h & g | i & ~g) | 0;
            f = (f >>> 18 | f << 14) + h | 0;
            g = a + -373897302 + g + (f & i | h & ~i) | 0;
            g = (g >>> 12 | g << 20) + f | 0;
            i = i + -701558691 + (g & h | f & ~h) | 0;
            i = (i >>> 27 | i << 5) + g | 0;
            h = h + 38016083 + (i & f | g & ~f) | 0;
            h = (h >>> 23 | h << 9) + i | 0;
            f = f + -660478335 + (h & g | i & ~g) | 0;
            f = (f >>> 18 | f << 14) + h | 0;
            g = g + -405537720 + (f & i | h & ~i) | 0;
            g = (g >>> 12 | g << 20) + f | 0;
            i = i + 568446438 + (g & h | f & ~h) | 0;
            i = (i >>> 27 | i << 5) + g | 0;
            h = h + -1019803562 + (i & f | g & ~f) | 0;
            h = (h >>> 23 | h << 9) + i | 0;
            f = d + -187363961 + f + (h & g | i & ~g) | 0;
            f = (f >>> 18 | f << 14) + h | 0;
            g = g + 1163531501 + (f & i | h & ~i) | 0;
            g = (g >>> 12 | g << 20) + f | 0;
            i = i + -1444681467 + (g & h | f & ~h) | 0;
            i = (i >>> 27 | i << 5) + g | 0;
            h = c + -51403784 + h + (i & f | g & ~f) | 0;
            h = (h >>> 23 | h << 9) + i | 0;
            f = f + 1735328473 + (h & g | i & ~g) | 0;
            f = (f >>> 18 | f << 14) + h | 0;
            g = g + -1926607734 + (f & i | h & ~i) | 0;
            g = (g >>> 12 | g << 20) + f | 0;
            i = i + -378558 + (f ^ h ^ g) | 0;
            i = (i >>> 28 | i << 4) + g | 0;
            h = h + -2022574463 + (g ^ f ^ i) | 0;
            h = (h >>> 21 | h << 11) + i | 0;
            f = f + 1839030562 + (i ^ g ^ h) | 0;
            f = (f >>> 16 | f << 16) + h | 0;
            g = g + -35309428 + (h ^ i ^ f) | 0;
            g = (g >>> 9 | g << 23) + f | 0;
            i = b + -1530992060 + i + (f ^ h ^ g) | 0;
            i = (i >>> 28 | i << 4) + g | 0;
            h = h + 1272893481 + (g ^ f ^ i) | 0;
            h = (h >>> 21 | h << 11) + i | 0;
            f = f + -155497632 + (i ^ g ^ h) | 0;
            f = (f >>> 16 | f << 16) + h | 0;
            g = g + -1094730640 + (h ^ i ^ f) | 0;
            g = (g >>> 9 | g << 23) + f | 0;
            i = i + 681279174 + (f ^ h ^ g) | 0;
            i = (i >>> 28 | i << 4) + g | 0;
            h = a + -358537222 + h + (g ^ f ^ i) | 0;
            h = (h >>> 21 | h << 11) + i | 0;
            f = d + -722521979 + f + (i ^ g ^ h) | 0;
            f = (f >>> 16 | f << 16) + h | 0;
            g = g + 76029189 + (h ^ i ^ f) | 0;
            g = (g >>> 9 | g << 23) + f | 0;
            i = i + -640364487 + (f ^ h ^ g) | 0;
            i = (i >>> 28 | i << 4) + g | 0;
            h = h + -421815835 + (g ^ f ^ i) | 0;
            h = (h >>> 21 | h << 11) + i | 0;
            f = f + 530742520 + (i ^ g ^ h) | 0;
            f = (f >>> 16 | f << 16) + h | 0;
            g = c + -995338651 + g + (h ^ i ^ f) | 0;
            g = (g >>> 9 | g << 23) + f | 0;
            a = a + -198630844 + i + ((g | ~h) ^ f) | 0;
            a = (a >>> 26 | a << 6) + g | 0;
            h = h + 1126891415 + ((a | ~f) ^ g) | 0;
            h = (h >>> 22 | h << 10) + a | 0;
            f = f + -1416354777 + ((h | ~g) ^ a) | 0;
            f = (f >>> 17 | f << 15) + h | 0;
            g = g + -57434055 + ((f | ~a) ^ h) | 0;
            g = (g >>> 11 | g << 21) + f | 0;
            a = a + 1700485571 + ((g | ~h) ^ f) | 0;
            a = (a >>> 26 | a << 6) + g | 0;
            d = d + -1894986606 + h + ((a | ~f) ^ g) | 0;
            d = (d >>> 22 | d << 10) + a | 0;
            f = f + -1051523 + ((d | ~g) ^ a) | 0;
            f = (f >>> 17 | f << 15) + d | 0;
            b = b + -2054922799 + g + ((f | ~a) ^ d) | 0;
            b = (b >>> 11 | b << 21) + f | 0;
            a = a + 1873313359 + ((b | ~d) ^ f) | 0;
            a = (a >>> 26 | a << 6) + b | 0;
            d = d + -30611744 + ((a | ~f) ^ b) | 0;
            d = (d >>> 22 | d << 10) + a | 0;
            f = f + -1560198380 + ((d | ~b) ^ a) | 0;
            f = (f >>> 17 | f << 15) + d | 0;
            b = b + 1309151649 + ((f | ~a) ^ d) | 0;
            b = (b >>> 11 | b << 21) + f | 0;
            a = a + -145522942 + ((b | ~d) ^ f) | 0;
            a = (a >>> 26 | a << 6) + b | 0;
            d = d + -1120210379 + ((a | ~f) ^ b) | 0;
            d = (d >>> 22 | d << 10) + a | 0;
            c = c + 718787259 + f + ((d | ~b) ^ a) | 0;
            c = (c >>> 17 | c << 15) + d | 0;
            b = b + -343485551 + ((c | ~a) ^ d) | 0;
            a = a + 1732584193 | 0;
            b = c + -271733879 + (b >>> 11 | b << 21) | 0;
            c = c + -1732584194 | 0;
            d = d + 271733878 | 0;
            e = e + 1 | 0
        } while ((e | 0) != 1e6);

        HEAP32[0] = a >>> 0;
        HEAP32[1] = b >>> 0;
        HEAP32[2] = c >>> 0;
        HEAP32[3] = d >>> 0;
        return 0;
    }

    return {
        /**
         * hashcash_md5
         *   @param {uint32} x0
         *   @param {uint32} x1
         *   @param {uint32} x2
         *   @param {uint32} x3
         */
        slowhash_md5: wa
    };
})(self, {}, gHeap);



function hex(val) {
    return ('00000000' + (val >>> 0).toString(16)).slice(-8);
}

self.onmessage = function(e) {
    var data = e.data;
    var type = data.type;
    var input = data.input;
    var turn = data.turn;

    var x0 = parseInt(input.substr( 0, 8));
    var x1 = parseInt(input.substr( 8, 8));
    var x2 = parseInt(input.substr(16, 8));
    var x3 = parseInt(input.substr(24, 8));


    if (turn == null) {
        // 初始化，评估 time 时间里能做几次
        var tickEnd = Date.now() + data.time;

        do {
            ASM.slowhash_md5(x0, x1, x2, x3);
            turn++;
        }
        while (Date.now() < tickEnd);
    }
    else {
        // 做够 turn 次
        for(var i = 0; i < turn; i++) {
            ASM.slowhash_md5(x0, x1, x2, x3);
        }
    }

    // 16 进制结果
    var x = new Uint32Array(gHeap);
    var result =
        hex(x[0]) +
        hex(x[1]) +
        hex(x[2]) +
        hex(x[3]);

    postMessage({
        result: result,
        turn: turn
    });
};


