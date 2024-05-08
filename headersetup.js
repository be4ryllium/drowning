document.body.innerHTML += '<div id="header"><ul><li><a><div>Home</div></a></li><li><a><div>Drowning</div></a></li><li><a href="javascript:drown()"><div>Drown</div></a></li></ul></div>'

function drown() {
    const ff = document.getElementById('ff');
    ff.style.display = 'block';
    setTimeout(() => {
        ff.style.opacity = '1';
        ff.style.transform = 'scale(1.1)';
        new Audio('Dark Souls - You Died Sound Effect.mp3').play();
    }, 100);
}