function playAudio() {
    const audioElement = document.querySelector("#thatsnotgoodenoughaudio");
    audioElement.volume = 1.0; 
    audioElement.pause();
    audioElement.load();
    audioElement.play(); 
}


function toggleMusic() {
    const audioElement = document.querySelector("#music");
    audioElement.volume = .4; 
    if(audioElement.paused) {
        audioElement.play(); 
    } else {
        audioElement.pause(); 
    }
}
