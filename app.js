const min = 1;
const max = 9;

function renderImage(box, number) {
	box.innerHTML = '';
	box.setAttribute(`data-number`, number);
	const image = document.createElement('img');
	image.src = `./images/${number}.jpg`;
	box.append(image);
}

const container = document.querySelector("#container");
container.addEventListener('click', function (event) {
	const box = this.querySelector('#image');
	let number = box.dataset.number;

	const button = event.target.closest('button');

	if (!button) return;

    if (!container.contains(button)) return;

	switch (button.id) {
		case 'prev':
			number--;
			break;	
		case 'next':
			number++;
			break;
	}

	renderImage(box, number);

	switch (number) {
		case min:
			this.querySelector("#prev").style.display = "none";
			break;
		case max:
			this.querySelector("#next").style.display = "none";
			break;
		default:
			this.querySelector("#prev").style.display = "block";
			this.querySelector("#next").style.display = "block";
			break;
	}
});


document.querySelector("#prev").style.display = "none";
renderImage(document.querySelector('#image'), 1);

