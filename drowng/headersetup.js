document.body.innerHTML +=
'<div id="header"><ul>' +

'<li><a><div>HOME</div></a></li>'+
'<li><a><div>FACTS</div></a></li>'+
'<li><a><div>CONSEQUENCES</div></a></li>'+
'<li><a><div>PREVENTION</div></a></li>'+
'<li><a><div>SAFEGUARD</div></a></li>'+
'<li><a><div>CONTACT</div></a></li>'+
'<li><a><div>ADVOCATE</div></a></li>'+
'<li><a><div>REFERENCES</div></a></li>'+

'</ul></div>'

function drown() {
    const ff = document.getElementById('ff');
    ff.style.display = 'block';
    setTimeout(() => {
        ff.style.opacity = '1';
        ff.style.transform = 'scale(1.1)';
        new Audio('Dark Souls - You Died Sound Effect.mp3').play();
    }, 100);
}