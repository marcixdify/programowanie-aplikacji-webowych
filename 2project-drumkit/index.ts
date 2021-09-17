
const soundElements: HTMLAudioElement[] = [
    document.querySelector('[data-sound="boom"]'), 
    document.querySelector('[data-sound="clap"]'),
    document.querySelector('[data-sound="hihat"]'),
    document.querySelector('[data-sound="kick"]'),
    document.querySelector('[data-sound="openhat"]'),
    document.querySelector('[data-sound="ride"]'),
    document.querySelector('[data-sound="snare"]'),
    document.querySelector('[data-sound="tink"]') 
];

const playButtons: HTMLButtonElement[] = [
    document.querySelector('#btn-play1'),
    document.querySelector('#btn-play2'),
    document.querySelector('#btn-play3'),
    document.querySelector('#btn-play4')
  ];
const recordButtons: HTMLButtonElement[] = [
      document.querySelector('#btn-record1'),
      document.querySelector('#btn-record2'),
      document.querySelector('#btn-record3'),
      document.querySelector('#btn-record4')
    ];

const PlaySelectedButton: HTMLInputElement = document.querySelector('#PlaySelectedButton');
const chanels: {key,time}[][] = [];
chanels[0]=[];
chanels[1]=[];
chanels[2]=[];
chanels[3]=[];

const startRecordTimes: number[] = [];

document.body.addEventListener('keypress', handleKeyPress);



recordButtons.forEach((button, i: number) => button.addEventListener('click', (ev) => {
    chanels[i] = [];
    startRecordTimes[i] = ev.timeStamp;
    
}))

playButtons.forEach((button, i: number) => button.addEventListener('click', () => {
        chanels[i].forEach(sound =>{
        const timeout = sound.time - startRecordTimes[i];
        setTimeout(() => playSound(sound.key),timeout);
    })
}))

function handleKeyPress(ev: KeyboardEvent): void {
    const key = ev.key;
    const time = ev.timeStamp;
    
    recordButtons.forEach((button, i) => {
        if(recordButtons[i].click) {
            chanels[i].push({
            key,
            time
            })
        }
    })

    const pad = document.querySelector(`.pad-${ev.key}`);

    if (pad === null){
       return // exception
    }

    pad.classList.add('playing');


    const pads = document.querySelectorAll('.pad');
    pads.forEach(function(pad){
        pad.addEventListener('transitionend', removeTransition);
        console.log(pad);
    })
    
    playSound(key);
}   

function removeTransition(ev): void {
    if (ev.propertyName !== 'transform') //skip if not a transform
      return
    this.classList.remove('playing')
}


function playSound(key: string){

    switch(key){
        case 'q':
            soundElements[0].currentTime = 0;
            soundElements[0].play()
        break;
        case 'w':
            soundElements[1].currentTime = 0;
            soundElements[1].play()
        break;
        case 'e':
            soundElements[2].currentTime = 0;
            soundElements[2].play()
        break;
        case 'r':
            soundElements[3].currentTime = 0;
            soundElements[3].play()
        break;
        case 'a':
            soundElements[4].currentTime = 0;
            soundElements[4].play()
        break;
        case 's':
            soundElements[5].currentTime = 0;
            soundElements[5].play()
        break;
        case 'd':
            soundElements[6].currentTime = 0;
            soundElements[6].play()
        break;
        case 'f':
            soundElements[7].currentTime = 0;
            soundElements[7].play()
        break;
    }
}
