function drumClick(event) {
  // console.log('e', event);
  const btn = event.target;
  btn.className = 'play';
  // console.log('btn', btn, btn.dataset.audio);
  // const audio = new Audio(btn.dataset.audio);
  const audio = btn.querySelector('audio');
  audio.play();

  setTimeout(() => {
    btn.className = 'key';
  }, 500);
}

// add listner for every button
const buttons = document.querySelectorAll('#keyboard > button');
for (const b of buttons) {
  b.addEventListener('click', drumClick);
}

// collect all audio and their keys
const aa = [...document.querySelectorAll('audio')];
const audioMap = aa.reduce((acc, x) => {
  acc[x.dataset.key] = x;
  return acc;
}, {});

// add listner for keys
window.addEventListener('keydown', (event) => {
  if (event.key in audioMap) {
    audioMap[event.key].play();
  }
});
