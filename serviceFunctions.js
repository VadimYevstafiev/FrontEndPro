import {
    clearProductItem,
    clearProductsList,
} from "./productFunctions.js";
import {categoryListener} from "./listeners.js";

export function createLi(name,  attribute, id) {
    const li = document.createElement('li');
    li.innerText = name;
    li.setAttribute(`data-${attribute}-id`, id);
    return li;
}

export function clearAll() {
    if (document.querySelector('.product-item') !== null) clearProductItem();

    if(document.querySelector('.products-list') !== null) clearProductsList();

    const ul = document.querySelector('ul');
    ul.removeEventListener('click', categoryListener);
    const aside = document.querySelector('aside');
    aside.style.display = 'none';
}