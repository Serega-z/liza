const whiteButtons = document.querySelectorAll('.button_type_secondary');

function changeButton (evt){
  evt.target.classList.remove('button_type_secondary');
  evt.target.classList.add('button_type_primary');
  evt.target.innerText = "Продолжить";
}

whiteButtons.forEach(item => item.addEventListener('click', changeButton));

