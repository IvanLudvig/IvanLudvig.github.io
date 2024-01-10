window.onload = () => {
    const canvas = new GlslCanvas(document.getElementById('glsl-canvas'));
    const file = new XMLHttpRequest();
    file.open('GET', './trainspotting.glsl');
    file.onreadystatechange = function () {
        canvas.load(file.responseText);
    };
    file.send();

    const title = document.getElementById('title');
    const flicker = () => {
        setTimeout(() => {
            title.style.color = '#fff';
            setTimeout(() => {
                title.style.color = '#000';
            }, 150);

            flicker();
        }, 200 + Math.random() * 4000);
    };

    flicker();

    const play = document.getElementById('audio-toggle');
    const audio = new Audio('audio.mp3');
    play.onclick = () => {
        if (audio.paused) {
            audio.play();
            audio.loop = true;
        } else {
            audio.pause();
            audio.currentTime = 0;
            audio.loop = false;
        }
    }

}
