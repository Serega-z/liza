const whiteButtons = document.querySelectorAll('.button-default_white');
const filterButtons = document.querySelectorAll('.filter-card__button');
const levelButton = document.getElementById('filterslevel');
const statusButton = document.getElementById('filtersstatus');
const filtersOptLevel = document.querySelector('.filters__options_type_level');
const filtersOptStatus = document.querySelector('.filters__options_type_status');
const selectedOptions = document.querySelector('.selected');
const checkBoxes = filtersOptLevel.querySelectorAll('.checkbox-container__input-hidden');
const selectedTemplate = document.querySelector('#selectedoption').content;

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

function filterClickEventListener(evt) {
  selectedOptions.innerHTML = '';
  const textLabels = getSelectedFilters();
  textLabels
    .map(text => createLabel(text))
    .forEach(label => selectedOptions.append(label));
}

function getSelectedFilters() {
  const checkedCheckboxes = Array.from(checkBoxes).filter(e => e.checked);
  return checkedCheckboxes.map(e => e.value);
}

function createLabel(text) {
  const template = selectedTemplate.querySelector('.selected__option');
  const newLabel = template.cloneNode(true);
  newLabel.querySelector('.option__text').textContent = text;
  return newLabel;
}

checkBoxes.forEach(item => item.addEventListener('click', filterClickEventListener));
whiteButtons.forEach(item => item.addEventListener('click', changeButton));
levelButton.addEventListener('click', toggleFilterLevel);
statusButton.addEventListener('click', toggleFilterStatus);