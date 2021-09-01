import mediaPlayer from './mediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');
const button = document.querySelector('#play');
const buttonMute = document.querySelector('#mute');

const player = new mediaPlayer({ el: video, plugin: [new AutoPlay(), new AutoPause()] });
button.addEventListener('click', () => player.play());
buttonMute.addEventListener('click', () => player.mute());


if ('ServiceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}