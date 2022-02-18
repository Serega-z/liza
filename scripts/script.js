const whiteButtons = document.querySelectorAll('.button-default_white');
const filterButtons = document.querySelectorAll('.filter-card__button');
const levelButton = document.getElementById('filterslevel');
const statusButton = document.getElementById('filtersstatus');
const filtersOptLevel = document.querySelector('.filters__options_type_level');
const filtersOptStatus = document.querySelector('.filters__options_type_status');
const selectedTemplate = document.querySelector('#selectedoption').content;
const selectedOptions = document.querySelector('.selected');
const selectedOption = selectedTemplate.querySelector('.selected__option').cloneNode(true);
const checkBoxes = filtersOptLevel.querySelectorAll('.checkbox-container__input-hidden');



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


const chipsContainer = document.querySelector('.chips-container');
const checkboxContainer = document.querySelectorAll('.filters__options');
const chipTemplate = document.querySelector('#chips-template').content
const checkboxResetButton = document.querySelector('.filters-list__reset-button');

checkedItems = {};

function checkboxResetButtonActive(){
	if(Object.entries(checkedItems).length > 0){
		checkboxResetButton.classList.add('filters-list__reset-button_active');
		;
	}else{
		checkboxResetButton.classList.remove('filters-list__reset-button_active');
	}
}

function seachLabelText(input){
 return input?.closest('.checkbox-container')?.textContent.trim();
}

function addChips(input, containerChips) {
    const textInput = seachLabelText(input);
    const chips = chipTemplate.querySelector('.chips').cloneNode(true);

    chips.querySelector('.chips__text').textContent = textInput;
    checkedItems[textInput] = {input, chips};

    function handleClickChips(e) {
        e.preventDefault();
        checkedItems[textInput].input.checked = false;
        delete checkedItems[textInput];
        chips.remove();
    }
    chips.addEventListener('click', handleClickChips)

    containerChips.append(chips)
    return chips;
}

function removeChips(input) {
    const textInput = seachLabelText(input);
    const chips = checkedItems[textInput].chips;
    delete checkedItems[textInput];
    chips.remove();
}

function handleInputCheckbox(e) {
    const inputCheckbox = e.target;

        if (inputCheckbox.checked) {
            addChips(inputCheckbox, chipsContainer)

        } else {
            removeChips(inputCheckbox)

        }
		checkboxResetButtonActive()
}

checkboxContainer.forEach((e)=>{
  e.addEventListener('input', handleInputCheckbox)
});

checkboxResetButton.addEventListener('click', ()=>{
	chipsContainer.querySelectorAll('div').forEach(el =>{
		el.remove();
	});
	checkboxResetButton.classList.remove('filters-list__reset-button_active');
})
