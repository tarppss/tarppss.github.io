window.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');

  const btn = document.createElement('button');
  btn.textContent = 'Pause Music';
  btn.style.position = 'fixed';
  btn.style.bottom = '20px';
  btn.style.right = '20px';
  btn.style.padding = '10px 20px';
  btn.style.background = 'rgba(0,0,0,0.6)';
  btn.style.color = 'white';
  btn.style.border = 'none';
  btn.style.borderRadius = '8px';
  btn.style.cursor = 'pointer';
  btn.style.zIndex = '999';

  btn.onclick = () => {
    if (music.paused) {
      music.play();
      btn.textContent = 'Pause Music';
    } else {
      music.pause();
      btn.textContent = 'Play Music';
    }
  };

  document.body.appendChild(btn);
});
