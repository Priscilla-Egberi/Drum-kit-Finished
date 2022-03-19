//STEP ONE - listening for a keydown event
window.addEventListener("keydown", function(e){
// STEP TWO - a code that will check if the key pressed is correct
    // a. we select the audio element from our html with the same key as key pressed
    const audioPressed = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // b. we use the if statement to tell our code to return nothing when the wrong key is pressed
    if (!audioPressed) return;
// STEP THREE - play the sound corresponding to the key pressed
    audioPressed.currentTime=0; // rewinds to start once finish playing
    audioPressed.play();
// STEP FOUR - animating the buttons on our page
    // a. we select the div element with our key from our html with the same key as key pressed
    const keyImage = document.querySelector(`.keys[data-key="${e.keyCode}"]`);
    // b. add a class to the div that will make it to animate
        keyImage.classList.add('playing');
});

// STEP FIVE - Remove animation
    // for each of the key pressed listen for transitionend add a removeTransition function to it.
    const key = document.querySelectorAll('.keys');
    key.forEach(item => item.addEventListener('transitionend', function(e){
        this.classList.remove('playing')
    }))

    