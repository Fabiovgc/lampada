const turn__on = document.getElementById('turn__on');
const turn__off = document.getElementById('turn__off');
const lamp = document.getElementById('lamp');

function lampOn() {
  lamp.src = './img/ligada.jpg';
}

turn__on.addEventListener("click", lampOn);
