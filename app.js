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

function createProductList(main, category) {
    const own = products.filter(function (item) {
        return item.category === category;
    });
    
    let list = document.querySelector('.products-list');

    if (list === null) {
        list = document.createElement('div');
        list.classList.add('products-list');
        main.append(list);
    } else {
        list.innerHTML = '';

        let item = document.querySelector('.product-item')
        if (item !== null) item.remove();
    }

    const productUl = document.createElement('ul');

    for (let i = 0; i < own.length; i++) {
        productUl.append(createLi(own[i].name, 'product', own[i].id))
    }
    list.append(productUl);
    productUl.addEventListener('click', productListener);
}

function createProductItem(product) {
    const main = document.querySelector('main');

    let item = document.querySelector('.product-item');
    if (item === null) {
        item = document.createElement('div');
        item.classList.add('product-item');
        main.append(item);
    } else {
        item.innerHTML = '';
    }

    let div;

    div = document.createElement('div');
    const image = document.createElement('img');
    image.src = product.image;
    div.append(image);
    item.append(div);

    div = document.createElement('div');
    div.innerText = product.name;
    item.append(div);

    div = document.createElement('div');
    div.innerText = product.desc;
    item.append(div);

    div = document.createElement('div');
    div.innerText = `Price: ${product.price}`;
    item.append(div);

    div = document.createElement('div');
    div.innerText = `Quantity: ${product.quantity}`;
    item.append(div);

    let button = document.createElement('button');
    button.innerText = 'Buy';
    button.setAttribute(`data-product-id`, product.id);
    item.append(button);
    button.addEventListener('click', buyProduct);
}

function clearProductItem() {
    const button = document.querySelector('.product-item button');
    button.removeEventListener('click', buyProduct);
    document.querySelector('.product-item').remove();
}

function clearProductsList() {
    const productUl = document.querySelector('.products-list ul');
    productUl.removeEventListener('click', productListener);
    document.querySelector('.products-list').remove();
}

function setDataToLocal(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

function getDataFromLocal(name) {
    return JSON.parse(localStorage.getItem(name));
}

function buyProduct(event) {
    
    const button = event.target;
    const id = button.dataset.productId;
    const now = new Date();
    const product = [{date: now.toDateString()}, products[id]];

    const isHasLocalOrders = localStorage.getItem('orders');

    if (isHasLocalOrders) {
        let orders = getDataFromLocal('orders');
        orders.push(product);
        setDataToLocal('orders', orders);
    } else {
        setDataToLocal('orders', [product]);
    }

    let div = document.createElement('div');
    div.innerText = `You buy ${product[1].name}`;
    div.classList.add('product-item');
    document.body.append(div);
    setTimeout(function () {
        div.remove();
        clearProductItem();
        clearProductsList()
    }, 2000)
}

function categoryListener(event) {
    const li = event.target.closest('li');
    if (!li) return;
    if (!ul.contains(li)) return;

    const main = document.querySelector('main');
    const id = li.dataset.categoryId;
    createProductList(main, categories[id]);
}

function productListener(event) {
    const li = event.target.closest('li');

    if (!li) return;
    if (!this.contains(li)) return;

    const id = li.dataset.productId;
    createProductItem(products[id]);
}

function orderListener(event) {
    const li = event.target.closest('.block');

    if (!li) return;
    if (!this.contains(li)) return;

    const id = li.dataset.orderId;

    createProductItem(products[id]);
}

function removeOrderListener(event) {
    const li = event.target.closest('.button');

    if (!li) return;
    if (!this.contains(li)) return;

    const id = parseInt(li.dataset.removeOrderId);

    let orders = getDataFromLocal('orders');
    let newOrders = orders.filter(function (item) {
        return item[1].id !== id;
    })

    setDataToLocal('orders', newOrders);

    const ul = document.querySelector('ul');
    ul.removeEventListener('click', categoryListener);
    const aside = document.querySelector('aside');
    aside.style.display = 'none';

    updateOrdersList();
    if (document.querySelector('.product-item') !== null) clearProductItem();
}

function clearAll() {
    if (document.querySelector('.product-item') !== null) clearProductItem();

    if(document.querySelector('.products-list') !== null) clearProductsList();

    const ul = document.querySelector('ul');
    ul.removeEventListener('click', categoryListener);
    const aside = document.querySelector('aside');
    aside.style.display = 'none';
}

function createOrdersListItem(order) {
    let parent = document.createElement('div');
    let div;

    div = document.createElement('div');
    div.classList.add('block');
    div.setAttribute(`data-order-id`, order[1].id);
    div.innerHTML = `<div>${order[0].date}</div><div>${order[1].name}</div>`;
    parent.append(div);

    let button = document.createElement('button');
    button.innerText ='Remove';

    div = document.createElement('div');
    div.classList.add('button');
    div.setAttribute(`data-remove-order-id`, order[1].id);

    div.append(button);
    parent.append(div);
    
    return parent;
}

function createOrdersList() {
    const main = document.querySelector('main');

    const ordersList = document.createElement('div');
    ordersList.classList.add('orders-list');
    main.append(ordersList);

    const orders = getDataFromLocal('orders');

    for (let i = 0; i < orders.length; i++) {
        ordersList.append(createOrdersListItem(orders[i]));
    }

    ordersList.addEventListener('click', orderListener);
    ordersList.addEventListener('click', removeOrderListener);
}

function updateOrdersList() {
    const ordersList = document.querySelector('.orders-list');

    ordersList.innerHTML = '';


    const orders = getDataFromLocal('orders');

    for (let i = 0; i < orders.length; i++) {
        ordersList.append(createOrdersListItem(orders[i]));
    }
}

function ordersListListener(event) {
    clearAll();
    createOrdersList();
}

const categories = ['Mobile phones', 'TV', 'Laptops'];

const ul = document.querySelector('ul');
for (let i = 0; i < categories.length; i++) {
    ul.append(createLi(categories[i], 'category', i));
}
ul.addEventListener('click', categoryListener);

const myOrders = document.querySelector('#my-orders');
myOrders.addEventListener('click', ordersListListener);
