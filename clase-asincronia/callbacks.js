function getSeconds(num) {
    return num * 1000;
}

function callbackCosas(arg1, arg2, fn) {
    setTimeout(function () {
        fn(arg1, arg2);
    }, getSeconds(4));
}

callbackCosas(2, 3, function (a, b) {
    console.log(a + b);
});
