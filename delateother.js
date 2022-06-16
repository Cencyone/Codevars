function removeChar(str){
    regexp = /^./
    arr = str.replace(regexp, '');
    arr= arr.replace(/.$/,'')
    return arr;
  
};
console.log(removeChar('eloquent'))