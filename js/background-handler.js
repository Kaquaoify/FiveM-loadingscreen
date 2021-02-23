var index = lib.rand(0, config.background.length);
var background = document.getElementById("background");
var background2 = document.getElementById("background2");

NextBackground()
setInterval(NextBackground, config.backgroundSpeed)

function NextBackground() {
    index = (index + 1) % config.background.length;
    background.setAttribute("class", "zoomin")

    setTimeout(() => {
        background.setAttribute("src", config.background[index]);
    }, 1900);

    setTimeout(() => {
        background.setAttribute("class", "");
    }, 3800);
}



