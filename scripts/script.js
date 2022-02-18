const whiteButtons = document.querySelectorAll('.button-default_white');
const filterButtons = document.querySelectorAll('.filter-card__button');
const levelButton = document.getElementById('filterslevel');
const statusButton = document.getElementById('filtersstatus');
const filtersOptLevel = document.querySelector('.filters__options_type_level');
const filtersOptStatus = document.querySelector('.filters__options_type_status');

function changeButton (evt){
  evt.target.classList.remove('button-default_white');
  evt.target.classList.add('button-default_orange');
  evt.target.innerText = "Продолжить";
}

function toggleFilterLevel(){
  filtersOptLevel.classList.toggle('filters__options_opened');
  levelButton.classList.toggle('filters-list__button_open');
}

function toggleFilterStatus(){
  filtersOptStatus.classList.toggle('filters__options_opened');
  statusButton.classList.toggle('filters-list__button_open');
}

whiteButtons.forEach(item => item.addEventListener('click', changeButton));
levelButton.addEventListener('click', toggleFilterLevel);
statusButton.addEventListener('click', toggleFilterStatus);