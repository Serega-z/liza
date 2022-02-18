const whiteButtons = document.querySelectorAll('.button-default_white');
const filterButtons = document.querySelectorAll('.filter-card__button');
const levelButton = document.getElementById('filterslevel');
const statusButton = document.getElementById('filtersstatus');
const filtersOptLevel = document.querySelector('.filters__options_type_level');
const filtersOptStatus = document.querySelector('.filters__options_type_status');
const selectedTemplate = document.querySelector('#selectedoption').content;
const selectedOptions = document.querySelector('.selected');
const selectedOption = selectedTemplate.querySelector('.selected__option').cloneNode(true);
const checkBoxes = document.querySelectorAll('.checkbox-container__input-hidden');

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

checkBoxes.forEach(item => item.addEventListener('click', function checked(evt) {
  if (item.checked) {
    selectedOption.querySelector('.option__text').textContent = evt.target.parentElement.textContent;
    selectedOptions.append(selectedOption); 
  }
}));


whiteButtons.forEach(item => item.addEventListener('click', changeButton));
levelButton.addEventListener('click', toggleFilterLevel);
statusButton.addEventListener('click', toggleFilterStatus);


