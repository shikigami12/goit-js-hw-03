/**
 * Filters an array of numbers to include only values greater than the specified value.
 *
 * @param {number[]} numbers - The array of numbers to filter.
 * @param {number} value - The threshold value; only numbers greater than this value will be included.
 * @return {number[]} A new array containing numbers from the input array that are greater than the specified value.
 * @throws {Error} If the value is not a number.
 */
function filterArray(numbers, value) {
    if (!Array.isArray(numbers)) {
        return [];
    }
    if (typeof value !== 'number') {
        throw new Error('Value must be a number');
    }
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            result.push(numbers[i]);
        }
    }
    return result;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]