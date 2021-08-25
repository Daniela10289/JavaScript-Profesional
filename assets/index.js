import mediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const button = document.querySelector('#play');
const buttonMute = document.querySelector('#mute');

const player = new mediaPlayer({ el: video, plugin: [new AutoPlay(), new AutoPause()] });
button.onclick = () => player.play();
buttonMute.onclick = () => player.mute();
