function play(btn) {
  btn.classList.add('play');
  // setTimeout(() => {
  //   btn.classList.remove('play');
  // }, 200);
}

function removeTransition(e) {
  console.log('in removeTransition, e', e);
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('play');
}

function clickBtn(event) {
  const btn = event.target;
  // console.log('btn', btn);

  const audio = btn.querySelector('audio');
  // console.log('audio', audio);
  play(btn);
  audio.currentTime = 0;
  audio.play();
}

// add listner for every button
const buttons = document.querySelectorAll('#keyboard > button');
for (const b of buttons) {
  b.addEventListener('click', clickBtn);
  b.addEventListener('transitionend', removeTransition);
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
