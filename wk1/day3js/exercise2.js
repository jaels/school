
function waitThenRun(abc) {
    setTimeout(abc, 1500);
}

waitThenRun(function() {
    console.log('Hello!');
});
