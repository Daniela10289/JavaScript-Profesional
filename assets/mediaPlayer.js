const button = document.querySelector('#play');
const buttonMute = document.querySelector('#mute');

function mediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

mediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach(plugin => {
        plugin.run();
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