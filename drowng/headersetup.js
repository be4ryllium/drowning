document.body.innerHTML +=
'<div id="header"><ul>' +

'<li><a href="index.html"><div>HOME</div></a></li>'+
'<li><a href="facts.html"><div>FACTS</div></a></li>'+
'<li><a href="consequences.html"><div>CONSEQUENCES</div></a></li>'+
'<li><a href="prevention.html"><div>PREVENTION</div></a></li>'+
'<li><a href="safeguard.html"><div>SAFEGUARD</div></a></li>'+
'<li><a href="contact.html"><div>CONTACT</div></a></li>'+
'<li><a href="advocate.html"><div>ADVOCATE</div></a></li>'+
'<li><a href="references.html"><div>REFERENCES</div></a></li>'+

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