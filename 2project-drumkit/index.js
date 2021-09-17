// let kickSound: HTMLAudioElement;
// let clapSound: HTMLAudioElement;
// const btnRecordChannel: any = document.querySelectorAll(".recordChannel button");
// const btnPlayChannel: any = document.querySelectorAll(".playchannel button");
// const btnStopRecord: any = document.querySelectorAll(".stopRecordChannel1 button");
// const channel1: any[] = [];
// appStart();
// function appStart() {
//     document.addEventListener('keypress', onKeyPress);
//     const btnPlayChannel1 = document.querySelector('#playChannel1')
//     btnPlayChannel1.addEventListener('click', onPlayChannel1);
//     getAudioElements();
// }
// function onPlayChannel1(): void {
//     channel1.forEach(sound => {
//         setTimeout(() => playSound(sound.key), sound.time)
//     })
// }
// function getAudioElements(): void {
//     kickSound = document.querySelector('[data-sound="kick"]');
//     clapSound = document.querySelector('[data-sound="clap"]');
// }
// function onKeyPress(ev: KeyboardEvent): void {
//     const key = ev.key;
//     const time = ev.timeStamp;
//     channel1.push({ key, time })
//     playSound(key);
//     console.log(channel1);
// }
// function playSound(key: string) {
//     switch (key) {
//         case 'a':
//             kickSound.currentTime = 0;
//             kickSound.play();
//             break;
//         case 's':
//             clapSound.currentTime = 0;
//             clapSound.play();
//             break;
//     }
// }
var soundElements = [
    document.querySelector('[data-sound="boom"]'),
    document.querySelector('[data-sound="clap"]'),
    document.querySelector('[data-sound="hihat"]'),
    document.querySelector('[data-sound="kick"]'),
    document.querySelector('[data-sound="openhat"]'),
    document.querySelector('[data-sound="ride"]'),
    document.querySelector('[data-sound="snare"]'),
    document.querySelector('[data-sound="tink"]')
];
var playButtons = [
    document.querySelector('#btn-play1'),
    document.querySelector('#btn-play2'),
    document.querySelector('#btn-play3'),
    document.querySelector('#btn-play4')
];
var recordButtons = [
    document.querySelector('#btn-record1'),
    document.querySelector('#btn-record2'),
    document.querySelector('#btn-record3'),
    document.querySelector('#btn-record4')
];
var PlaySelectedButton = document.querySelector('#PlaySelectedButton');
var chanels = [];
chanels[0] = [];
chanels[1] = [];
chanels[2] = [];
chanels[3] = [];
var startRecordTimes = [];
document.body.addEventListener('keypress', handleKeyPress);
recordButtons.forEach(function (button, i) { return button.addEventListener('click', function (ev) {
    chanels[i] = [];
    startRecordTimes[i] = ev.timeStamp;
}); });
playButtons.forEach(function (button, i) { return button.addEventListener('click', function () {
    chanels[i].forEach(function (sound) {
        var timeout = sound.time - startRecordTimes[i];
        setTimeout(function () { return playSound(sound.key); }, timeout);
    });
}); });
function handleKeyPress(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    recordButtons.forEach(function (button, i) {
        if (recordButtons[i].click) {
            chanels[i].push({
                key: key,
                time: time
            });
        }
    });
    var pad = document.querySelector(".pad-" + ev.key);
    if (pad === null) {
        return; // exception
    }
    pad.classList.add('playing');
    var pads = document.querySelectorAll('.pad');
    pads.forEach(function (pad) {
        pad.addEventListener('transitionend', removeTransition);
        console.log(pad);
    });
    playSound(key);
}
function removeTransition(ev) {
    if (ev.propertyName !== 'transform') //skip if not a transform
        return;
    this.classList.remove('playing');
}
function playSound(key) {
    switch (key) {
        case 'q':
            soundElements[0].currentTime = 0;
            soundElements[0].play();
            break;
        case 'w':
            soundElements[1].currentTime = 0;
            soundElements[1].play();
            break;
        case 'e':
            soundElements[2].currentTime = 0;
            soundElements[2].play();
            break;
        case 'r':
            soundElements[3].currentTime = 0;
            soundElements[3].play();
            break;
        case 'a':
            soundElements[4].currentTime = 0;
            soundElements[4].play();
            break;
        case 's':
            soundElements[5].currentTime = 0;
            soundElements[5].play();
            break;
        case 'd':
            soundElements[6].currentTime = 0;
            soundElements[6].play();
            break;
        case 'f':
            soundElements[7].currentTime = 0;
            soundElements[7].play();
            break;
    }
}
