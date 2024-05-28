////// =========  unknown type  ==============/////
// unknown type or any type lagbhag similer hai .. 
// jab data ko any type assign kiya //
// let data : any;
// data = 10;
// data = 'shivam';
// let item : string;
// item = data
// jab data ko unknown type assign kiya ///
// let data : unknown;
// data = 10;
// data = 'shivam';
// let item : string;
// item = data
/// unkonow type assign karne ke baad if else se check karna  //
var data;
data = 10;
data = 'shivam';
//jab pata ho ki data ka type ab string hai 
var item;
if (typeof data === 'string') {
    item = data;
    console.log(item);
}
