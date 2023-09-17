let menuBar = document.querySelector('.bar');
let sections = document.querySelector('.bar-sections');

menuBar.onclick = () => {
	if (menuBar.classList.contains('active')) {
		menuBar.classList.remove('active');
	} else {
		menuBar.classList.add('active');
	}
};
