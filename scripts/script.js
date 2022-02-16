const orangeButton = document.querySelector('.button-default_orange');
const whiteButton = document.querySelector('.button-default_white');

function changeButton (evt){
  evt.target.classList.remove('button-default_white');
  evt.target.classList.add('button-default_orange');
  evt.target.innerText = "Продолжить";
}

whiteButton.addEventListener('click', changeButton);