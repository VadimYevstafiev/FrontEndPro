export const devices = {
    iphone: false, 
    sumsung: false,
    maizu: false,
    asus: false
};


export function parseSearch(string) {
    let params = [];
    string.slice(1).split('&').forEach(element => {
        let data = element.split('=');
        params[data[0]] = data[1].split(',');
    });
   return params;
}

export function devicesListener(event) {
    const input = event.target.closest('input');
    const status = event.target.checked;

    if (!input) return;
    if (!this.contains(input)) return;

    const device = input.dataset.device;
    devices[device] = status;

    const forSearch = [];
    for (const key in devices) {
        if (Object.hasOwnProperty.call(devices, key)) {
            if (devices[key]) forSearch.push(key);
        }
    }
    if (forSearch.length > 0) {
        const searchString = forSearch.toString();
        location.href = `http://127.0.0.1:5500/index.html?devices=${searchString}`;
    } else {
        location.href = `http://127.0.0.1:5500/index.html`;       
    }

}

export function checkLi(devices, element) {
    for (let i = 0; i < devices.length; i++) {
        if (element.id === devices[i]) return true;        
    }
    return false;
}


