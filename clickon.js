document.addEventListener("DOMContentLoaded" , function() {
    const headhphones = document.getElementById("clickon");

    const audio = document.getElementById('myAudio');

    headhphones.addEventListener("click" , function () {
        audio.play();
    });
});