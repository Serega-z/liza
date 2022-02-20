const whiteButtons = document.querySelectorAll('.button-default_color_white');
const levelButton = document.getElementById('filterslevel');
const statusButton = document.getElementById('filtersstatus');
const filtersOptLevel = document.querySelector('.filters__options_type_level');
const filtersOptStatus = document.querySelector('.filters__options_type_status');
const chipsContainer = document.querySelector('.chips-container');
const checkboxContainer = document.querySelectorAll('.filters__options');
const chipTemplate = document.querySelector('#chips-template').content;
const checkboxResetButton = document.querySelector('.filters__reset-button');

function changeButton (evt){
  evt.target.classList.remove('button-default_color_white');
  evt.target.classList.add('button-default_color_orange');
  evt.target.innerText = "Продолжить";
}

function toggleFilterLevel(){
  filtersOptLevel.classList.toggle('filters__options_opened');
  levelButton.classList.toggle('filters__button_open');
}

function toggleFilterStatus(){
  filtersOptStatus.classList.toggle('filters__options_opened');
  statusButton.classList.toggle('filters__button_open');
}

checkedItems = {};

function checkboxResetButtonActive() {
	if (Object.entries(checkedItems).length > 0) {
		checkboxResetButton.classList.add('filters__reset-button_active');
	} else {
		checkboxResetButton.classList.remove('filters__reset-button_active');
	}
}

function searchLabelText(input) {
  return input?.closest('.checkbox-container')?.textContent.trim();
}

function addChips(input) {
    const textInput = searchLabelText(input);

    const chips = createChips(textInput);

    checkedItems[textInput] = {input, chips};

    chipsContainer.append(chips);
}

function removeChips(input) {
  const textInput = searchLabelText(input);
  const chips = checkedItems[textInput].chips;
  delete checkedItems[textInput];
  chips.remove();
}

function createChips(text) {
  const chips = chipTemplate.querySelector('.chips').cloneNode(true);

  chips.querySelector('.chips__text').textContent = text;

  chips.addEventListener('click', e => {
    e.preventDefault();
    checkedItems[text].input.checked = false;
    delete checkedItems[text];
    chips.remove();
  });

  return chips;
}

function handleInputCheckbox(e) {
    const inputCheckbox = e.target;

    if (inputCheckbox.checked) {
        addChips(inputCheckbox)
    } else {
        removeChips(inputCheckbox)
    }

		checkboxResetButtonActive();
}

levelButton.addEventListener('click', toggleFilterLevel);
statusButton.addEventListener('click', toggleFilterStatus);

whiteButtons.forEach(item => item.addEventListener('click', changeButton));
checkboxContainer.forEach(e => e.addEventListener('input', handleInputCheckbox));

checkboxResetButton.addEventListener('click', () => {
	chipsContainer.querySelectorAll('div').forEach(el => el.remove());
	checkboxResetButton.classList.remove('filters__reset-button_active');
});
