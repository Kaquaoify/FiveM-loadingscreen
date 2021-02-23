let time = config.progressTime;
let newprogress = 0;

let progressbar = document.getElementById('pb1');
let progressbarText = document.getElementById('progress-bar-value')
let x = setInterval(() => {
    newprogress++
    progressbar.value = newprogress
    progressbarText.innerHTML = newprogress
    if (newprogress >= 100) {
        clearInterval(x)
    }
}, time / 100 * 1000)


// Rotate message, load new message every x milliseconds.
function RotateMessage() {
    lib.fadeInOut(600, "message", 0, 1);

    setTimeout(function () {
        let message = document.getElementById("message");
        let index = lib.rand(0, config.loadingMessages.length);
        message.innerHTML = config.loadingMessages[index];
    }, 600);
}

setInterval(RotateMessage, (config.loadingMessageSpeed));
