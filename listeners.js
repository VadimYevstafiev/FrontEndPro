import {categories} from "./categories.js";
import {products} from "./products.js";
import {clearAll} from "./serviceFunctions.js";
import {
    createProductList,
    createProductItem,
    clearProductItem
} from "./productFunctions.js";
import {setDataToLocal, getDataFromLocal} from "./localStorageFunctions.js";
import { 
    createOrdersList,
    updateOrdersList
 } from "./orderFunctions.js";

export function categoryListener(event) {
    const ul = document.querySelector('ul');
    const li = event.target.closest('li');
    if (!li) return;
    if (!ul.contains(li)) return;

    const main = document.querySelector('main');
    const id = li.dataset.categoryId;
    createProductList(main, categories[id]);
}

export function productListener(event) {
    const li = event.target.closest('li');

    if (!li) return;
    if (!this.contains(li)) return;

    const id = li.dataset.productId;
    createProductItem(products[id]);
}

export function orderListener(event) {
    const li = event.target.closest('.block');

    if (!li) return;
    if (!this.contains(li)) return;

    const id = li.dataset.orderId;

    createProductItem(products[id]);
}

export function removeOrderListener(event) {
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

export function ordersListListener(event) {
    clearAll();
    createOrdersList();
}
