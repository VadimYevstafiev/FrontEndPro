import {products} from "./products.js";
import {setDataToLocal, getDataFromLocal} from "./localStorageFunctions.js";
import {productListener} from "./listeners.js";
import {createLi} from "./serviceFunctions.js";
import {confirmFormShow} from "./confirmFunctions.js";

export function createProductList(main, category) {
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

export function createProductItem(product) {
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

export function clearProductItem() {
    const button = document.querySelector('.product-item button');
    button.removeEventListener('click', buyProduct);
    document.querySelector('.product-item').remove();
}

export function clearProductsList() {
    const productUl = document.querySelector('.products-list ul');
    productUl.removeEventListener('click', productListener);
    document.querySelector('.products-list').remove();
}

export function buyProduct(event) {
    
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
        clearProductsList();
        confirmFormShow();
    }, 2000);

}
