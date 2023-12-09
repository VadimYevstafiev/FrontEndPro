function generateKey(length, string) {
    let output = '';
    for (let i = 0; i < length; i++) {
        output += string[Math.floor(Math.random() * string.length)];        
    }
    return output;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i