var myText = 'Prostě dobrá cestovka...';
var myArray = myText.split("");

function typewriter() {

  if(myArray.length > 0) {
    document.getElementById("name").innerHTML += myArray.shift();
    } else {
    clearTimeout(loopTimer);
    return false;
    }

  var loopTimer = setTimeout('typewriter()', 150);
}

var idk = setTimeout('typewriter()', 150);