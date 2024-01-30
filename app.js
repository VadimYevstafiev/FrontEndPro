const products = [
    {
        id: 0,
        name: "Samsung Galaxy S24 Ultra 12GB/1TB",
        desc: "Good product",
        price: 62000,
        quantity: 45,
        image: "https://content2.rozetka.com.ua/goods/images/big/398086107.jpg",
        category: "Mobile phones"
    },
    {
        id: 1,
        name: "Apple iPhone 15 Pro Max 256GB",
        desc: "Good product",
        price: 60000,
        quantity: 32,
        image: "https://content1.rozetka.com.ua/goods/images/big/364834195.jpg",
        category: "Mobile phones"
    },
    {
        id: 2,
        name: "Motorola G54 Power 12/256GB",
        desc: "Good product",
        price: 8000,
        quantity: 44,
        image: "https://content2.rozetka.com.ua/goods/images/big/366846770.jpg",
        category: "Mobile phones"
    },
    {
        id: 3,
        name: "Samsung Galaxy A24 6/128GB",
        desc: "Good product",
        price: 9000,
        quantity: 12,
        image: "https://content.rozetka.com.ua/goods/images/big/328132324.jpg",
        category: "Mobile phones"
    },
    {
        id: 4,
        name: "Realme C55 8/256GB",
        desc: "Good product",
        price: 7000,
        quantity: 62,
        image: "https://content.rozetka.com.ua/goods/images/big/327488786.jpg",
        category: "Mobile phones"
    },
    {
        id: 5,
        name: "Samsung QE55Q60CAUXUA",
        desc: "Good product",
        price: 34000,
        quantity: 32,
        image: "https://content2.rozetka.com.ua/goods/images/big/396650212.jpg",
        category: "TV"
    },
    {
        id: 6,
        name: "Nokia Smart TV QLED 5500D",
        desc: "Good product",
        price: 19000,
        quantity: 32,
        image: "https://content1.rozetka.com.ua/goods/images/big/324833757.jpg",
        category: "TV"
    },
    {
        id: 7,
        name: "iFFALCON iFF43U62",
        desc: "Good product",
        price: 10000,
        quantity: 32,
        image: "https://content1.rozetka.com.ua/goods/images/big/322266741.jpg",
        category: "TV"
    },
    {
        id: 8,
        name: "Lenovo IdeaPad 3 15IAU7",
        desc: "Good product",
        price: 23000,
        quantity: 42,
        image: "https://content.rozetka.com.ua/goods/images/big/374343935.jpg",
        category: "Laptops"
    },
    {
        id: 9,
        name: "Acer Aspire 7 A715-76G-560W",
        desc: "Good product",
        price: 34000,
        quantity: 23,
        image: "https://content2.rozetka.com.ua/goods/images/big/362592851.jpg",
        category: "Laptops"
    },
    {
        id: 10,
        name: "ASUS Vivobook 15 X1500EA-BQ3733",
        desc: "Good product",
        price: 17000,
        quantity: 17,
        image: "https://content.rozetka.com.ua/goods/images/big/374343935.jpg",
        category: "Laptops"
    },
    {
        id: 11,
        name: "HP Laptop 15s-fq5032ua",
        desc: "Good product",
        price: 19000,
        quantity: 4,
        image: "https://content.rozetka.com.ua/goods/images/big/363540817.jpg",
        category: "Laptops"
    },
];

function createLi(name,  attribute, id) {
    const li = document.createElement('li');
    li.innerText = name;
    li.setAttribute(`data-${attribute}-id`, id);
    return li;
}

function clearProducts() {
    const button = document.querySelector('.product-item button');
    button.removeEventListener('click', buyProduct);
    document.querySelector('.product-item').innerHTML = '';

    const productUl = document.querySelector('.products-list ul');
    productUl.removeEventListener('click', productListener);
    document.querySelector('.products-list').innerHTML = '';
}

function buyProduct(event) {
    const button = event.target;
    const name = button.dataset.productName;

    let div = document.createElement('div');
    div.innerText = `You buy ${name}`;
    div.classList.add('product-item');
    document.body.append(div);
    setTimeout(function () {
        div.remove();
        clearProducts();
    }, 2000)
}

function productListener(event) {
    const li = event.target.closest('li');

    if (!li) return;
    if (!this.contains(li)) return;

    const id = li.dataset.productId;
    const item = document.querySelector('.product-item');
    item.innerHTML = '';

    let div;

    div = document.createElement('div');
    const image = document.createElement('img');
    image.src = products[id].image;
    div.append(image);
      item.append(div);

    div = document.createElement('div');
    div.innerText = products[id].name;
    item.append(div);

    div = document.createElement('div');
    div.innerText = products[id].desc;
    item.append(div);

    div = document.createElement('div');
    div.innerText = `Price: ${products[id].price}`;
    item.append(div);

    div = document.createElement('div');
    div.innerText = `Quantity: ${products[id].quantity}`;
    item.append(div);

    let button = document.createElement('button');
    button.innerText = 'Buy';
    button.setAttribute(`data-product-name`, products[id].name);
    item.append(button);
    button.addEventListener('click', buyProduct);
}




const categories = ['Mobile phones', 'TV', 'Laptops'];
const ul = document.querySelector('ul');

for (let i = 0; i < categories.length; i++) {
    ul.append(createLi(categories[i], 'category', i));
}

ul.addEventListener('click', function (event) {
    const li = event.target.closest('li');
    if (!li) return;
    if (!ul.contains(li)) return;

    const id = li.dataset.categoryId;
    const own = products.filter(function (item) {
        return item.category === categories[id];
    });

    const list = document.querySelector('.products-list');
    list.innerHTML = '';
    const productUl = document.createElement('ul');

    for (let i = 0; i < own.length; i++) {
        productUl.append(createLi(own[i].name, 'product', own[i].id))
    }
    list.append(productUl);
    productUl.addEventListener('click', productListener);
})
