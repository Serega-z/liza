const whiteButtons = document.querySelectorAll('.button-default_color_white');

function changeButton (evt){
  evt.target.classList.remove('button-default_color_white');
  evt.target.classList.add('button-default_color_orange');
  evt.target.innerText = "Продолжить";
}

whiteButtons.forEach(item => item.addEventListener('click', changeButton));

