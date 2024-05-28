///===================  manual function type ======================///
function add():number {
    return 10+20;
}
let r = add()
console.log(r)

///////================    Example 2  ============================///
function app(a:number, b:number):number {
return a+b;
}
let s = app(10,30)
console.log(s)


/////=================     Exmplple 3   ==========================///
let e = 10;
let f = "shivam"
let golu  = ():number =>{
    return e;
}
let p = golu()
console.log(p)

////////==============   Example  4   ===========================///
let monu = (): undefined => {
   return undefined;
}
console.log(monu()); // Logs: undefined
