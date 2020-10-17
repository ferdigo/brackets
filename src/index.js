module.exports = function check(str, bracketsConfig) {
  let open =[];
  let closed = []
let squareOpenBracket = '['
let squareClosedBracket = ']'
let openBracket = '('
let closedBracket = ')'
let curlyOpenBracket = '{'
let curlyClosedBracket = '}'

if(str.length % 2 != 0 || typeof(str) === 'number') return false

console.log(str)
for(let element of str){
    if(element == squareOpenBracket || element == openBracket || element == curlyOpenBracket){
        open.push(element)
    }
    if(element == squareClosedBracket || element == closedBracket || element == curlyClosedBracket){
        closed.push(element)
    }
}

if (open.length == closed.length) return true
return false


}
