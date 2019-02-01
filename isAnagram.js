function isAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    // create a character count for the string
    var str1Count = {};
    Array.prototype.forEach.call(str1, function (ch) {
        str1Count[ch] = str1Count[ch] ? 1 + str1Count[ch] : 1;
    });

    // compare the character count with the second string
    var str2len = str2.length;
    for (var i = 0; i < str2len; i++) {
        if (!str1Count[str2[i]]) {
            return false;
        } else {
            str1Count[str2[i]] -= 1;
        }
    }
    return true;
}

console.log(isAnagram('dog', 'god')); // true
console.log(isAnagram('foo', 'bar')); // false
console.log(isAnagram('foo', 'fooo'));