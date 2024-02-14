import {
    orderListener,
    removeOrderListener
} from "./listeners.js";
import {setDataToLocal, getDataFromLocal} from "./localStorageFunctions.js";

export function createOrdersListItem(order) {
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

export function createOrdersList() {
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

export function updateOrdersList() {
    const ordersList = document.querySelector('.orders-list');

    ordersList.innerHTML = '';


    const orders = getDataFromLocal('orders');

    for (let i = 0; i < orders.length; i++) {
        ordersList.append(createOrdersListItem(orders[i]));
    }
}