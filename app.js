var p = window.document.querySelector('p'),
    button = document.querySelector('#button'),
    snippet = "Ceci est du texte \t plus loin";

function display(string) {
    document.write(string);
}

button.addEventListener('click', function () {
    display(snippet);
});

document.body.addEventListener(dblclick, function () {
    location.reload();
});
