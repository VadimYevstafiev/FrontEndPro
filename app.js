const table = document.createElement('TABLE');
let row;
let cell;
let counter = 0;

for (i = 0; i < 10; i++) {
    row = document.createElement('TR');
    table.append(row);
    for (j = 0; j < 10; j++) {
        cell = document.createElement('TD');
        cell.innerText = ++counter;
        row.append(cell);
    }
}

const parent = document.querySelector('#table');
parent.append(table);
