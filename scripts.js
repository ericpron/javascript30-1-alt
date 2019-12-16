// play associated audio key and toggle on .playing on keydown event
window.addEventListener("keydown", function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.toggle("playing");
});

// toggle off .playing on keyup event
window.addEventListener("keyup", function(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.toggle("playing");
});
