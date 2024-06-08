const turn__on = document.getElementById('turn__on');
const turn__off = document.getElementById('turn__off');
const lamp = document.getElementById('lamp');


function isLampBroken(){
  return lamp.src.indexOf ('quebrada') > -1;
}


function lampOn() {
  if(!isLampBroken()){
  lamp.src = './img/ligada.jpg';
  }
}

function lampOff() {
  if(!isLampBroken()){
  lamp.src = './img/b983w.jpg'
  }
}

function lampBroke() {
  lamp.src = './img/quebrada.jpg'
}

turn__on.addEventListener("click", lampOn);
turn__off.addEventListener("click", lampOff)
lamp.addEventListener("mouseover", lampOn)
lamp.addEventListener("mouseleave", lampOff)
lamp.addEventListener("dblclick", lampBroke)