function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


const btn = document.querySelector("#btn");
btn.addEventListener('click', function () {
    const box = document.querySelector('#image');
    box.innerHTML = '';
    const rndInt = randomIntFromInterval(1, 9);
    const image = document.createElement('img');
    image.src = `./images/${rndInt}.jpg`;
    box.append(image);

})

