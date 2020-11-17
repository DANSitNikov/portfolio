import click from '../../src/assets/audio/Fishki.wav';

let soundOnOff = false;

export function changeSoundOnOff(item) {
  soundOnOff = item;
}

export function audio() {
  if (soundOnOff !== false) {
    let audio = new Audio();
    audio.src = `${click}`;
    audio.autoplay = true;
  }
}
