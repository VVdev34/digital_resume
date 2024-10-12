

const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const modale = document.querySelector('.modale')
const nom = document.querySelector('.name')



one.addEventListener('mouseover', () => {
  one.style.width = '65%';
  one.style.height = '45%';
  one.style.backgroundColor = "#73615C"

  two.style.width = '35%';
  two.style.height = '65%';

  three.style.top = "45%";
  three.style.left = "45%";

  four.style.width = "45%";
  four.style.height = "55%";
  four.style.top = "45%"


  five.style.width = "55%";
  five.style.height = "35%";

});
one.addEventListener('mouseout', () => {
  one.style.width = '60%';
  one.style.height = '40%';
  one.style.backgroundColor = "white"

  two.style.width = '40%';
  two.style.height = '60%';

  three.style.width = "20%";
  three.style.height = "20%";
  three.style.top = "40%";
  three.style.left = "40%";


  four.style.width = "40%";
  four.style.height = "60%";
  four.style.top = "40%"


  five.style.width = "60%";
  five.style.height = "40%";


});
two.addEventListener('mouseover', () => {
  one.style.width = '55%';
  one.style.height = '45%';

  two.style.width = '45%';
  two.style.height = '65%';
  two.style.backgroundColor = "rgb(158, 63, 63)"

  three.style.top = "45%";
  three.style.left = "35%";

  four.style.width = "35%";
  four.style.height = "55%";
  four.style.top = "45%"


  five.style.width = "65%";
  five.style.height = "35%";


});
two.addEventListener('mouseout', () => {
  one.style.width = '60%';
  one.style.height = '40%';

  two.style.width = '40%';
  two.style.height = '60%';
  two.style.backgroundColor = "white"

  three.style.width = "20%";
  three.style.height = "20%";
  three.style.top = "40%";
  three.style.left = "40%";


  four.style.width = "40%";
  four.style.height = "60%";
  four.style.top = "40%"


  five.style.width = "60%";
  five.style.height = "40%";
  five.style.right = "0"


});
four.addEventListener('mouseover', () => {
  one.style.width = '65%';
  one.style.height = '35%';

  two.style.width = '35%';
  two.style.height = '55%';

  three.style.top = "35%";
  three.style.left = "45%";

  four.style.width = "45%";
  four.style.height = "65%";
  four.style.top = "35%"
  four.style.backgroundColor = "rgb(158, 63, 63)"
  four.style.position = "absolute"



  five.style.width = "55%";
  five.style.height = "45%";


});
four.addEventListener('mouseout', () => {
  one.style.width = '60%';
  one.style.height = '40%';

  two.style.width = '40%';
  two.style.height = '60%';

  three.style.width = "20%";
  three.style.height = "20%";
  three.style.top = "40%";
  three.style.left = "40%";


  four.style.width = "40%";
  four.style.height = "60%";
  four.style.top = "40%"
  four.style.backgroundColor = "white"


  five.style.width = "60%";
  five.style.height = "40%";
  five.style.right = "0"


});
five.addEventListener('mouseover', () => {
  one.style.width = '55%';
  one.style.height = '35%';

  two.style.width = '45%';
  two.style.height = '55%';

  three.style.top = "35%";
  three.style.left = "35%";

  four.style.width = "35%";
  four.style.height = "65%";
  four.style.top = "35%"



  five.style.width = "65%";
  five.style.height = "45%";
  five.style.backgroundColor = "#73615C"


});
five.addEventListener('mouseout', () => {
  one.style.width = '60%';
  one.style.height = '40%';

  two.style.width = '40%';
  two.style.height = '60%';

  three.style.width = "20%";
  three.style.height = "20%";
  three.style.top = "40%";
  three.style.left = "40%";


  four.style.width = "40%";
  four.style.height = "60%";
  four.style.top = "40%"


  five.style.width = "60%";
  five.style.height = "40%";
  five.style.right = "0"
  five.style.backgroundColor = "white"


});
three.addEventListener('mouseover', () => {
  one.style.width = '40%';
  one.style.height = '60%';

  two.style.width = '60%';
  two.style.height = '40%';

  three.style.top = "40%";
  three.style.left = "40%";

  four.style.width = "60%";
  four.style.height = "40%";
  four.style.top = "60%"



  five.style.width = "40%";
  five.style.height = "60%";
  five.style.backgroundColor = "white"




});
three.addEventListener('mouseout', () => {
  one.style.width = '60%';
  one.style.height = '40%';

  two.style.width = '40%';
  two.style.height = '60%';

  three.style.width = "20%";
  three.style.height = "20%";
  three.style.top = "40%";
  three.style.left = "40%";


  four.style.width = "40%";
  four.style.height = "60%";
  four.style.top = "40%"


  five.style.width = "60%";
  five.style.height = "40%";
  five.style.right = "0"
  five.style.backgroundColor = "white"


});


function bim(target) {
  two.style.display = "none"
  three.style.display = "none"
  four.style.display = "none"
  five.style.display = "none"
  one.style.width = "100%"
  one.style.height = "100%"
  

  setTimeout(() => {
    window.location.href = target;
  }, 230);
}
 
function bim2(target) {
  one.style.display = "none"
  three.style.display = "none"
  four.style.display = "none"
  five.style.display = "none"
  two.style.width = "100%"
  two.style.height = "100%"

  setTimeout(() => {
    window.location.href = target;
  }, 230);
}
 
function bim4(target) {
  one.style.display = "none"
  two.style.display = "none"
  three.style.display = "none"
  five.style.display = "none"
  four.style.height = "100%"
  four.style.width = "100%"
  four.style.top = 0

  setTimeout(() => {
    window.location.href = target;
  }, 230);
}
 
function bim5(target) {
  one.style.display = "none"
  two.style.display = "none"
  three.style.display = "none"
  four.style.display = "none"
  five.style.width = "100%"
  five.style.height = "100%"

  setTimeout(() => {
    window.location.href = target;
  }, 230);
}

function bim3(target) {
  one.style.display = "none"
  two.style.display = "none"
  five.style.display = "none"
  four.style.display = "none"
  three.style.width = "100%"
  three.style.height = "100%"
  three.style.top = 0
  three.style.left = 0

  setTimeout(() => {
    window.location.href = target;
  }, 230);
}



  

 