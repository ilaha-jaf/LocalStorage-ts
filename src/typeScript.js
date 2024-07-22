function set(key, value) {
    var item = JSON.stringify({ type: typeof value, value: value });
    localStorage.setItem(key, item);
}
function get(key) {
    var item = localStorage.getItem(key);
    if (!item) {
        return 'melumat yoxdur';
    }
    var parsedItem = JSON.parse(item);
    if (parsedItem.type === 'string') {
        return parsedItem.value;
    }
    else if (parsedItem.type === 'number') {
        return parseFloat(parsedItem.value);
    }
    else if (parsedItem.type === 'boolean') {
        return parsedItem.value === 'true';
    }
    else if (parsedItem.type === 'object') {
        return parsedItem.value;
    }
    else if (parsedItem.type === 'array') {
        return parsedItem.value;
    }
    else if (parsedItem.type === 'undefined') {
        return undefined;
    }
    else {
        return null;
    }
}
function remove(key) {
    localStorage.removeItem(key);
}
function clearAll() {
    localStorage.clear();
}
set('kimse', 'nese');
set('1', 'bir');
set('isLogging', true);
set('user', { name: 'John Doe', age: 30 });
set('array', [1, 2, 3]);
console.log(get('kimse'));
console.log(get('1'));
console.log(get('isLogging'));
console.log(get('user'));
console.log(get('array'));
remove('1');
// clearAll();
