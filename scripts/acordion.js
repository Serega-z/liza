const accordinons = document.querySelectorAll('.filters__point');

accordinons.forEach(el => {
	el.addEventListener('click', (e) =>{
		const self = e.currentTarget;
		self.classList.toggle('open');
	});
})




