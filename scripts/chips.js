const chipsContainer = document.querySelector('.chips-container');
const checkboxContainer = document.querySelectorAll('.filters__options');
const chipTemplate = document.querySelector('#chips-template').content
const checkboxResetButton = document.querySelector('.filters__reset-button');

checkedItems = {};

function checkboxResetButtonActive(){
	if(Object.entries(checkedItems).length > 0){
		checkboxResetButton.classList.add('filters__reset-button_active');
	}else{
		checkboxResetButton.classList.remove('filters__reset-button_active');
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
		checkboxResetButtonActive()
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
	checkboxResetButton.classList.remove('filters__reset-button_active');
})
