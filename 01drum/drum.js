function play(btn) {
  btn.className = 'play';
  setTimeout(() => {
    btn.className = 'key';
  }, 500);
}

function clickBtn(event) {
  const btn = event.target;
  const audio = btn.querySelector('audio');
  play(btn);
  audio.play();
}

// add listner for every button
const buttons = document.querySelectorAll('#keyboard > button');
for (const b of buttons) {
  b.addEventListener('click', clickBtn);
}

// collect all audio and their keys
const audioMap = {};
for (x of document.querySelectorAll('audio')) {
  audioMap[x.dataset.key] = { audio: x, btn: x.parentElement };
}

// add listner for keys
window.addEventListener('keydown', (event) => {
  if (event.key in audioMap) {
    audioMap[event.key].audio.play();
    play(audioMap[event.key].btn);
  }
});

// const aa = [...document.querySelectorAll('audio')];
// const audioMap = aa.reduce((acc, x) => {
//   acc[x.dataset.key] = x;
//   return acc;
// }, {});
