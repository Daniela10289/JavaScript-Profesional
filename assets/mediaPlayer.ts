const button = document.querySelector('#play');
const buttonMute = document.querySelector('#mute');

class mediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    innerText: string;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
    }
    private initPlugins() {
        // const player = {
        //     play: () => this.play,
        //     pause: () => this.pause,
        //     media: this.media,
        //     get muted() {
        //         return this.media.muted;
        //     },

        //     set muted(value) {
        //         this.media.muted = value;
        //     },
        // };

        // player.muted();
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