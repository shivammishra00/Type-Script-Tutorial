function tryReturn() {
    // return true;
}
console.log(tryReturn());
/////  never type 
function apiError(msg, code) {
    throw { Message: msg, apicode: code };
}
console.log(apiError("server side error", 500));
