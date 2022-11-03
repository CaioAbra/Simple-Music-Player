const btnPlay = document.querySelector("#btn-play");
const btnPlayIcon = document.querySelector('#btn-play-icon');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const musicName = document.querySelector('#music-name');;
const musicAuthor = document.querySelector('#music-author');
const playerCurrentTime = document.querySelector('#player-current-time');
const playerDuration = document.querySelector('#player-duration');
const playerProgress = document.querySelector('#player-progress');
const audioPlayer = document.querySelector('#audio-player');

let currentMusic = 0;
const musics = [
    {
        name: "He Is",
        author: "Ghost",
        path: "./musics/He-Is.mp3"
    },
    {
        name: "Square Hammer",
        author: "Ghost",
        path: "./musics/Square-Hammer"
    },
    {
        name: "Cirice",
        author: "Ghost",
        path: "./musics/Cirice"
    },
    {
        name: "Con Clavi Con Dio",
        author: "Ghost",
        path: "./musics/Con-Clavi-Con-Dio"
    },
    {
        name: "Dance Macabre",
        author: "Ghost",
        path: "./musics/Dance-Macabre"
    },
    {
        name: "Elizabeth",
        author: "Ghost",
        path: "./musics/Elizabeth"
    }
];

btnPlay.addEventListener("click", () => togglePlayMusic());
btnPrev.addEventListener("click", () => changeMusic(false));
btnNext.addEventListener("click", () => changeMusic());
audioPlayer.addEventListener("timeupdate", () => timeUpdate());

const togglePlayMusic = () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        btnPlayIcon.classList.replace("fa-play", "fa-pause");
    } else {
        audioPlayer.pause();
        btnPlayIcon.classList.replace("fa-pause", "fa-play");
    }
};

const changeMusic = (next = true) => {
    if (next && currentMusic < musics.length - 1) {
        currentMusic++;
    } else if (!next && currentMusic > 0) {
        currentMusic--;
    } else {
        return;
    }

    updatePlayer();
    togglePlayMusic();
};

const updatePlayer = () => {
    const music = musics[currentMusic];

    musicName.innerHTML = music.name;
    musicAuthor.innerHTML = music.author;
    audioPlayer.src = music.path;
};

const timeUpdate = () => {
    const { currentTime, duration } = audioPlayer;

    if (isNaN(duration)) return;

    playerDuration.innerHTML = formatSecondsToMinutes(duration);
    playerCurrentTime.innerHTML = formatSecondsToMinutes(currentTime);
    playerProgress.max = duration;
    playerProgress.value = currentTime;
};

const formatSecondsToMinutes = (seconds) => {
    return new Date(seconds * 1000).toISOString().slice(14, 19);
};


$(document).ready(function () { updatePlayer(); });