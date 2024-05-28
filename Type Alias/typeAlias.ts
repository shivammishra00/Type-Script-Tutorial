///////   type alias  ///////////////////
type valType = string | number | boolean | undefined;

function add(a: valType, b: valType) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
}

console.log(add(10, "20"));


///////////////  example  2   ////////////////////

let a:valType = 101;
let b:valType = 202;
let c:valType = 20;
let d:valType = 20;

