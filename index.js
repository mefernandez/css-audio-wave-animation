const div = document.querySelector('.target')

var running = false;

div.addEventListener('click', (e) => {
    var spans = document.querySelectorAll('.sound-wave span');
    spans.forEach(el => {
        if (!running) {
            el.classList.add('play');
            el.classList.remove('pause');
        } else {
            el.classList.remove('play');
            el.classList.add('pause');
        }
    });
    running = !running;
})