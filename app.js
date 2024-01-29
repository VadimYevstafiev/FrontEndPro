 const count = 5;
 
 function createSmileCell(number) {
    const smile = document.createElement('IMG');
    smile.src = `./images/smile_${number}.png`;
    smile.classList.add('smile');

    const cell = document.createElement('TH');
    cell.append(smile);
    cell.setAttribute(`data-id`, number);
    return cell;
 }

 function createRateCell(number) {
    const rate = document.createElement('DIV');
    rate.innerText = rating[number];
    rate.classList.add('rate');
    rate.setAttribute(`id`, number);

    const cell = document.createElement('TD');
    cell.append(rate);
    return cell;
 }

 function createRow(filler) {
    const row = document.createElement('TR');
    for (let i = 0; i < count; i++) {
        row.append(filler(i));
    }
    return row;
}

const rating = [];
for (let i = 0; i < count; i++) {
    rating.push(0);
}
const table = document.createElement('TABLE');
table.append(createRow(createSmileCell));
table.append(createRow(createRateCell));

const parent = document.querySelector('#table');
parent.append(table);

table.addEventListener('click', function (event) {
    const th = event.target.closest('th');

    if (!th) return;

    if (!table.contains(th)) return;

    const id = th.dataset.id;

    const result = document.getElementById(`${id}`);
    result.innerText = ++rating[id];
});
