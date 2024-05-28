// litiral type 
// yaha par data ka type "ab" hoga ya 10 hoga iske alava koi r value ko assigne nhi kar sakte yafi kaege to error aayegi 
var data = 10;
///////////////////////////////////////////////////////////////////////////////////
function combine(a, b, type) {
    // ab yaha par data type comapre nhi hoga balki value compare karege 
    if (type === 'as-number') {
        return (+a) + (+b); // handle karne ka tarika 
    }
    else {
        return a.toString() + b.toString();
    }
}
//  console.log(combine(10,20, 'as-number'))
//  console.log(combine("anil","sidhu", "as-string"))
//////////// second example   ////////////////////////
function add(a, b, type) {
    if (type === 'as-string') {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(add("10", "20", "as-string"));
