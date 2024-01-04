var codes = {
    "+6": "Польща",
    "+38": "Україна",
    "+1": "США"
   };
for (let key in codes) {
    let value = codes[key];
    key = +key;
    console.log(`${key}: ${value}`);
}
