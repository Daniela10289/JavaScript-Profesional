import mediaPlayer from '../../mediaplayer/src/mediaPlayer';
import AutoPlay from '../../mediaplayer/src/plugins/AutoPlay';
import AutoPause from '../../mediaplayer/src/plugins/AutoPause';
import Ads from '../../mediaplayer/src/plugins/Ads';

const video = document.querySelector('video');
const button = document.querySelector('#play');
const buttonMute = document.querySelector('#mute');

const player = new mediaPlayer({
    el: video, 
    plugin: [new AutoPlay(), new AutoPause(), new Ads()], });
button.addEventListener('click', () => player.play());
buttonMute.addEventListener('click', () => player.mute());


if ('ServiceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}