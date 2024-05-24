const spacer = document.getElementById('spacer')
const main = document.getElementById('main')

function frame() {
    requestAnimationFrame(frame);
    spacer.style.top = `${main.offsetTop + main.offsetHeight + 100}px`;
}
frame()