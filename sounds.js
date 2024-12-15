document.addEventListener("DOMContentLoaded", function () {
    const audioElement = document.querySelector('audio');
    const soundsLink = document.querySelector('.sounds');

    soundsLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default behavior of the anchor tag

        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    });
});
