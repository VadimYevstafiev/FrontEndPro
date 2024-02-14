import {categories} from "./categories.js";
import {createLi} from "./serviceFunctions.js";
import {categoryListener, ordersListListener} from "./listeners.js";
import {confirmFormHide} from "./confirmFunctions.js";

confirmFormHide();

const ul = document.querySelector('ul');
for (let i = 0; i < categories.length; i++) {
    ul.append(createLi(categories[i], 'category', i));
}
ul.addEventListener('click', categoryListener);

const myOrders = document.querySelector('#my-orders');
myOrders.addEventListener('click', ordersListListener);
