/**
 * Combines two arrays into a single array and limits the size of the result to a specified maximum length.
 *
 * @param {Array} firstArray The first array to be concatenated.
 * @param {Array} secondArray The second array to be concatenated.
 * @param {number} maxLength The maximum length of the resulting array. If the combined array exceeds this length, it is truncated.
 * @return {Array} A new array formed by concatenating the two input arrays, limited to the specified maximum length.
 */
function makeArray(firstArray, secondArray, maxLength) {
    if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
        return [];
    }

    if (maxLength <= 0) {
        return [];
    }

    const result = firstArray.concat(secondArray);

    return result.length > maxLength ? result.slice(0, maxLength) : result;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []