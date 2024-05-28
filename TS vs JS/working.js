// javaScript ko type script ki tarah kaam karvana
function sum(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2
    }
    else {
        console.log("Values are not number")
    }

}
let result = sum("10", 20)
console.log(result)
