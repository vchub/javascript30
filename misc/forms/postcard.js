const form = document.querySelector('form');
const result = document.querySelector('#result');
const submit = form.querySelector('button');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  for (x of form.elements) {
    if (x.id !== 'submit') {
      // console.log(x, x.id);
      node = result.querySelector('#' + x.id);
      // console.log('node', node);
      node.textContent = x.value;
    }
  }
});
// const data = {}
// for (x of form)
