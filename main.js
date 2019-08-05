function playSound(e) {
  /* get the audio element for the input keycode */
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);

  /* get the key element for the input keycode */
  const key = this.document.querySelector(`.drum-key[data-key="${e.keyCode}"]`);

  /* if there is no audio element for the user input, exit the function */
  if (!audio) return;

  /* reset the audio current time, so that next user input
   does not wait till the first audio is completed */
  audio.currentTime = 0;

  /* play the audio element */
  audio.play();

  /* add css class */
  key.classList.add("playing");
}

function removeListener(e) {
  /* get the element for the input keycode */
  const key = this.document.querySelector(`.drum-key[data-key="${e.keyCode}"]`);
  if (!key) return;

  /* remove the css class when user input is completed */
  key.classList.remove("playing");
}

window.addEventListener("keydown", playSound);

window.addEventListener("keyup", removeListener);
