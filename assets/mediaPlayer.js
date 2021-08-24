const button = document.querySelector('#play');
const buttonMute = document.querySelector('#mute');

function mediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

mediaPlayer.prototype._initPlugins = function() {
    const player = {
        play: () => this.play,
        pause: () => this.pause,
        media: this.media,
        get muted() {
            return this.media.muted;
        },

        set muted(value) {
            this.media.muted = value
        },
    };

    // player.muted();

    this.plugins.forEach(plugin => {
        // Ninguno de los plugins va tener acceso a play o muted
        plugin.run(player);
    });
}

mediaPlayer.prototype.play = function() {
    if (this.media.paused) {
        this.media.play();
        button.innerText = 'Pause';
    }else {
        this.media.pause();
        button.innerText = 'Play';
    }
};

mediaPlayer.prototype.mute = function() {
    if (!this.media.muted) {
        this.media.muted = true;   
        buttonMute.innerText = 'Unmute';
    }else {
        this.media.muted = false   
        buttonMute.innerText = 'Mute';
    }
}

export default mediaPlayer;