/*
    DOM elements....
*/
var container = document.getElementById("music-info");
var slider = document.getElementById("volumeSlider");
var np = document.getElementById("now-playing");
var playButton = document.getElementById("play-button")
/* 
    Setup the audio controls and create interval for music info updates.
*/

setInterval(UpdateMusicInfo, 1000);

/* 
    Initalize controls for music.
*/
slider.addEventListener("input", UpdateVolume, false);
/* 
    Update the volume of the player.
*/
function UpdateVolume() {
    setVolume((slider.value - 1));
}


/* 
    Update the music info.
*/
function UpdateMusicInfo() {

    if (title.length != 0) {
        np.innerHTML = "Lecture en cours: " + title;
    }
    else {
        np.innerHTML = "Lecture en cours: n.a.";
    }
}

var playing = true;


/* 
    Process the events from the start/stop button.
 */
function OnPlayClick() {
    if (playing) {
        playing = false;
        pause();

        playButton.classList.remove("icon-pause2")
        playButton.classList.add("icon-play3")

    }
    else {
        playing = true;
        resume();

        playButton.classList.remove("icon-play3")
        playButton.classList.add("icon-pause2")
    }
}

function OnSkipClick() {
    if (playing) {
        skip();
    }
}

