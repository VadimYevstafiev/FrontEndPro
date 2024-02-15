import {getBrowserData} from "./browserData.js";
import {parseSearch, checkLi, devicesListener} from "./parseUrl.js";

const navigatorData = navigator;

const browserDiv = document.querySelector('.browser');
const browserData = getBrowserData(navigatorData.userAgent);
browserDiv.innerHTML = `<p>This browser is ${browserData.name}/${browserData.version}</p>
<p>This userAgent is "${navigatorData.userAgent}"</p>
<p>This language is "${navigatorData.language}"</p>`;

const url = location;
const devices = parseSearch(url.search).devices;

const lies = document.querySelectorAll('input');
lies.forEach(element => {
    if (checkLi(devices, element)) {
        element.checked = true;
    }
});

const ul = document.querySelector('ul');
ul.addEventListener('click', devicesListener);







//location.href = 'http://127.0.0.1:5500/index.html?devices=iphone,samsung';
// let url = new URL('http://127.0.0.1:5500/index.html?devices=iphone,samsung');
