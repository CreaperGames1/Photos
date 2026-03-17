const audio = document.getElementById('audio');
audio.play().catch(() => {
  document.addEventListener('click', () => audio.play(), { once: true });
  document.addEventListener('touchstart', () => audio.play(), { once: true });
});