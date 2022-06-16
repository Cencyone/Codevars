function isPangram(string){
    let literal = string.replace(/ /g, '').split('')
    let result = []
    let k
    for (let strong of literal) {
        if (!result.includes(strong)) {
            result.push(strong)
        }
    }
    (result == literal) ? k = true :
        k = false; 
  console.log(k)
}
isPangram('The quick brown fox jumps over the lazy dog.')