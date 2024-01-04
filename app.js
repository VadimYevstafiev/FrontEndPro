function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString, function(key, value) {
            if (key == '') return value;
            const format = (key === 'age')
                ? 'number'
                : 'string';
            if (typeof value !== format) throw new SyntaxError (`Invalid JSON: Unexpected ${typeof value} in JSON at position ${key}`);
            return value;
        });
    } catch (e) {
        return {
            error: e.message
        };
    }
}


const jsonString1 = '{"name": "John", "age": 30, "city": "New York"}';

const jsonString2 = '{"name": "Alice", "age": "twenty-five", "city": "London"}';

console.log(parseJSON(jsonString1));

console.log(parseJSON(jsonString2));
