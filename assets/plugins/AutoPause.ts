// Deberia pausar el video apenas cambio de pestaña, lo cual no funciona por ahora :(

import mediaPlayer from "../mediaPlayer";

/*
El visibilityChange forma parte del API del DOM llamado Page Visibility y nos deja saber si el elemento es visible, pude ser usado para ejecutar una acción cuando cambiamos de pestaña. Así podemos ahorrar batería y mejorar la UX.
*/

class AutoPause {
    private threshold: number;
    player: mediaPlayer;
    play: any;

    constructor () {
        this.threshold = 0.25
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    run(player) {
        this.player = player; 
        const observer = new IntersectionObserver(this.handleIntersection, {
        threshold: this.threshold,       
        });
        observer.observe(this.player.media)

        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }

    private handleIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0];
        
        const isVisible = entry.intersectionRatio >= this.threshold

        if (isVisible) {
            this.player.play();
        }else {
            this.play.pause();
        }
    }
    private handleVisibilityChange() {
        const isVisible = document.visibilityState === "visible"       
        if (isVisible) {
            this.play.play()
        }else {
            this.play.pause()

        }
    }
}

export default AutoPause;