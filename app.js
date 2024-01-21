const reviews = [
    new Map([
        ['name', 'Катя'],
        ['text', 'Катя не катит']
    ]),
    new Map([
        ['name', 'Валя'],
        ['text', 'Валя не валит']
    ]),
    new Map([
        ['name', 'Света'],
        ['text', 'Света не светит']
    ]),
];

const parent = document.querySelector('#testimonials');

const insert = new DocumentFragment();

reviews.map(function (item) {
    const child = document.createElement('div');
    
    const head = document.createElement('h1');
    head.innerHTML = item.get('name');
    child.append(head);

    const content = document.createElement('p');
    content.innerHTML = item.get('text');
    child.append(content);

    insert.append(child);
})

parent.append(insert);
