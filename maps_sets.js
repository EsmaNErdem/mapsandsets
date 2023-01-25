new Set([1,1,2,2,3,4]) //{1, 2, 3, 4}

const str = [...new Set("referee")].join("") //"ref"

let m = new Map();
m.set([1,2,3], true); //{Array(3) => true}
m.set([1,2,3], false); //{Array(3) => false}


const hasDuplicate = (arr) => new Set(arr).size !== arr.length;
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false



const vowelCount = (str) => {
    str = str.toLowerCase();
    const char = [...str].filter(vowel => {
        const vowels = "aeiou"
        return vowels.includes(vowel); 
    })
    const vowelMap = new Map();
    char.forEach(vowel => {
        return vowelMap.has(vowel) ? vowelMap.set(vowel, vowelMap.get(vowel) + 1) : vowelMap.set(vowel, 1);
    })
    return vowelMap
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }