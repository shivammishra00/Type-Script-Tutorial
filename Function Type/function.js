///===================  manual function type ======================///
function add() {
    return 10 + 20;
}
var r = add();
console.log(r);
///////================    Example 2  ============================///
function app(a, b) {
    return a + b;
}
var s = app(10, 30);
console.log(s);
/////=================     Exmplple 3   ==========================///
var e = 10;
var f = "shivam";
var golu = function () {
    return e;
};
var p = golu();
console.log(p);
////////==============   Example  4   ===========================///
var monu = function () {
    return undefined;
};
console.log(monu()); // Logs: undefined
