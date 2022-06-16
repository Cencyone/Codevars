let str = 'The quick brown fox jumps over the lazy dog.'

function reverseWords(str) {
    str = str.split(' ');
    let newArr=[];
    for (let i = 0; i < str.length; i++) {
        let newStr = str[i].split('').reverse();
        newArr[i] = newStr.join('');
    }
    return newArr.join(' ')
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))