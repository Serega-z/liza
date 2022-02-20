const whiteButtons = document.querySelectorAll('.button-secondary');

function changeButton (evt){
  evt.target.classList.remove('button-secondary');
  evt.target.classList.add('button-primary');
  evt.target.innerText = "Продолжить";
}

whiteButtons.forEach(item => item.addEventListener('click', changeButton));

