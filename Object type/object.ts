// ///////// normal ////
// const human = {
//     name: 'romel',
//     age: 27
// }
// console.log(human.name)


// //////////////  type object define kiya ///////////////////
// const man:object = {
//     name: 'romel',
//     age: 27
// }
// console.log(man.name)


// ////  ye same hai //
// const man:{} = {
//     name: "romel",
//     age: 27
// }

////////// ======  ts object esa karna hai type scrypt me ============= /////

const person:{name:string, age:number} = {
    name: 'romel',
    age: 27
}
console.log(person.name, person.age)
console.log(Object.keys(person))




/////  same object ke liye ek hi type define karna =========////////
type objType = {name:string, age:number}
const human:objType = {
    name: 'manish',
    age: 28
}
console.log(human.name, human.age)

////////////////////////////////////////////
const user:objType = {
    name: 'abdul',
    age: 29
}
console.log(user.name, user.age)


////////////////////////////////////////////////////////
interface userType{
    name: string,
    age: number
}


let users:userType={
    name: "abcd",
    age: 20
}
console.log(users);


interface objValue{
    name:string,
    age: number
}

let obj:{name:string, age:number} = {
    name: "shivam ",
    age: 22
}

console.log(obj.name)




