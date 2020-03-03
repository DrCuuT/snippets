var dedent = require('dedent-js')

var p = window.document.querySelector('p'),
    button = document.getElementById('do'),
    text = document.getElementById('texte'),
    snippet = dedent(`.screen-reader-text {
  position: absolute;
  top: -9999px;
  left: -9999px;
}`)

function copyStringToClipboard (str) {
   // Create new element
   var el = document.createElement('textarea');
   // Set value (string to be copied)
   el.value = str;
   // Set non-editable to avoid focus and move outside of view
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   // Select text inside element
   el.select();
   // Copy text to clipboard
   document.execCommand('copy');
   // Remove temporary element
   document.body.removeChild(el);
}

function display(string) {
    copyStringToClipboard(string)
};

button.addEventListener('click', function () {
    copyStringToClipboard(snippet)
});

Ligne 1
Ligne 2
    fin
