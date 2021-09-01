import mediaPlayer from "../mediaPlayer";

class AutoPlay {
    constructor() { }
    run(player: mediaPlayer) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        // player.mute();
        player.play();
    }
}

 export default AutoPlay;