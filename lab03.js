// Problem 1
function log(strings) {
    strings.forEach(str => console.log(str));
}
log(["Hello", "World", "This is Lab3 week 3"]);

// Problem 2
function buildArray(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}
console.log(buildArray(5, 10)); // [5, 6, 7, 8, 9, 10]

// Problem 3
function addDollars(numbers) {
    return numbers.map(num => `$${num}`);
}
console.log(addDollars([1, 2, 3, 4])); // ['$1', '$2', '$3', '$4']
