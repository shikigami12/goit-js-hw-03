/**
 * Converts a given string into a URL-friendly "slug" by transforming it to lowercase,
 * removing non-alphanumeric characters, and replacing spaces with a separator.
 *
 * @param {string} title - The input string to be converted into a slug.
 * @return {string} The resulting slug, formatted for URL usage.
 */
function slugify(title) {
    const separator = "-";
    const delimiter = " ";
    const regex = /[^a-z0-9]/g;

    return title
        .toLowerCase()
        .split(delimiter)
        .map(word => word.replace(regex, ''))
        .filter(word => word.length > 0)
        .join(separator);
}


console.log(slugify("Arrays for beggin@@ers ##")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"