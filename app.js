var p = window.document.querySelector('p'),
    start = document.querySelector('#do'),
    snippet = "Ceci est du texte \s plus loin";

function display(string) {
    document.write(string);
}

start.addEventListener('click', function () {
    display(snippet);
});

document.body.addEventListener(ondblclick, function () {
    location.reload();
});
