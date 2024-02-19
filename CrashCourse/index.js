let numbers = [1,2,3,4,5,6];

const squares = numbers.map((a) => Math.pow(a,2));
let bigSquares = squares.filter((element)=> element>=10);
let majorSquare = bigSquares.reduce((a,b)=>(a>b===true ? a : b));
let total = numbers.reduce((a,b)=> a+b);
let totalSquares = squares.reduce((a,b)=>a+b);
console.log(total);
console.log(totalSquares);
console.log(bigSquares)
console.log(majorSquare);