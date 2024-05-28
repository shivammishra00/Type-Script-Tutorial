//  type script me main variable ke sath uska datatype bhi define kar dege ki ye variable kis type ki value ko store karke rakha hai ..

// var a:number = 10;
// console.log(a)

/// jab code likh lege to sabse pahle ts file ko compile karege uske badd jo js ki file create hogi use run karege ....


///// === number store in parameter ==== //////////
function app(a:number,b:number){
  return a+b;
}
let result = app(1,2)
console.log(result)


//////////////  string value store in function parameter  //////
// function dummy(a:string){
//   return a;
// }
// let r = dummy("hello dummy")
// console.log(r)