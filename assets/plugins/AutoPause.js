// Deberia pausar el video apenas cambio de pestaña, lo cual no funciona por ahora :(

/*
El visibilityChange forma parte del API del DOM llamado Page Visibility y nos deja saber si el elemento es visible, pude ser usado para ejecutar una acción cuando cambiamos de pestaña. Así podemos ahorrar batería y mejorar la UX.
*/

class AutoPause {
    constructor () {
        this.threshold = 0.25
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    run(player) {
        rhis.player = player; 
        const observer = new IntersectionObserver(this.handleIntersection, {
        threshold: this.threshold,       
        });
        observer.observe(this.player.media)

        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }

    handleIntersection(entries) {
        const entry = entries[0];
        
        const isVisible = entry.intersectionRatio >= this.threshold

        if (isVisible) {
            this.player.play();
        }else {
            this.play.pause();
        }
    }
    handleVisibilityChange() {
        const isVisible = document.visibilityState === "visible"       
        if (isVisible) {
            this.play.play()
        }else {
            this.play.pause()

        }
    }
}

export default AutoPause;