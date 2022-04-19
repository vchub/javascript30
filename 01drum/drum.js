function drum(event) {
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
  b.addEventListener('click', drum);
  // b.onclick = drum;
}
