/// ek hi variable me ek se jyada type assigne kar dena //
let data : number | string = 3;


///////  funtion example ko use karege .....
function combine(a:number | string,b:number | string){
   if(typeof a === 'number' && typeof b === 'number'){
    return a+b;
   }
   else{
    return a.toString() + b.toString()
   }
}
console.log(combine(10,20))
console.log(combine("anil","sidhu"))