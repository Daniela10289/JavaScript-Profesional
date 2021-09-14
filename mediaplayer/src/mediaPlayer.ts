const button = document.querySelector('#play');
const buttonMute = document.querySelector('#mute');

class mediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    innerText: string;
    container: HTMLElement;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
        this.initPlayer();
    }

    initPlayer() {
        this.container = document.createElement('div')
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private initPlugins() {
      
        this.plugins.forEach(plugin => {
            // Ninguno de los plugins va tener acceso a play o muted
            plugin.run(this);
        });
    }
    play() {
        if (this.media.paused) {
            this.media.play();
            button.textContent = 'Pause';
        } else {
            this.media.pause();
            button.textContent = 'Play';
        }
    }
    mute() {
        if (!this.media.muted) {
            this.media.muted = true;
            buttonMute.textContent = 'Unmute';
        } else {
            this.media.muted = false;
            buttonMute.textContent = 'Mute';
        }
    }
}




export default mediaPlayer;