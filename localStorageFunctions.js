export function setDataToLocal(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

export function getDataFromLocal(name) {
    return JSON.parse(localStorage.getItem(name));
}
