// Typing Effect
const texts = ["Developer", "Problem Solver", "Tech Explorer"];
let count = 0, index = 0, currentText = '', letter = '';

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById('typed-text').innerHTML = `Hello, I'm a <span class="text-primary">${letter}</span>`;
  if (letter.length === currentText.length) {
    count++; index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 100);
  }
})();