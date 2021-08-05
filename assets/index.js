import mediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const button = document.querySelector('#play');
const buttonMute = document.querySelector('#mute');

const player = new mediaPlayer({ el: video, plugin: [new AutoPlay()] });
button.onclick = () => player.play();
buttonMute.onclick = () => player.mute();
