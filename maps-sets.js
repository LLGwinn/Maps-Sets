/**hasDuplicate
Write a function called hasDuplicate which accepts an array and returns true or false 
if that array contains a duplicate */
const hasDuplicate = (arr) => {
    const newSet = new Set(arr);
    return arr.length !== newSet.size;
}

/**vowelCount
Write a function called vowelCount which accepts a string and returns a map where the 
keys are numbers and the values are the count of the vowels in the string. */
const vowelCount = (str) => {
    const vowels = 'aeiou';
    const resultMap = new Map();
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            resultMap.has(char) ? resultMap.set(char, resultMap.get(char) + 1) :
            resultMap.set(char, 1);
        }
    }
    return resultMap;
}