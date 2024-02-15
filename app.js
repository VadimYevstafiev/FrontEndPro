import {getBrowserData} from "./browserData.js";
import {devices, parseSearch, checkLi, devicesListener} from "./devices.js";

const navigatorData = navigator;

const browserDiv = document.querySelector('.browser');
const browserData = getBrowserData(navigatorData.userAgent);
browserDiv.innerHTML = `<p>This browser is ${browserData.name}/${browserData.version}</p>
<p>This userAgent is "${navigatorData.userAgent}"</p>
<p>This language is "${navigatorData.language}"</p>`;

const url = location;
const search = url.search;

if (search !== '') {
    const params = parseSearch(search).devices;
    const lies = document.querySelectorAll('input');
    lies.forEach(element => {
        if (checkLi(params, element)) {
            element.checked = true;
            devices[element.id] = true;
        }
    });
 }

const ul = document.querySelector('ul');
ul.addEventListener('click', devicesListener);
