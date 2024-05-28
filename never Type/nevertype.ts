function tryReturn(){
    // return true;
}
console.log(tryReturn())


/////  never type ka example ///

function apiError(msg, code):never{
     throw {Message:msg, apicode:code}
}
console.log(apiError("server side error", 500))