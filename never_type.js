// never type - when a function doesn't return any value
// function tryReturn() {
//     return true;
// }
// console.log(tryReturn());
function apiError(msg, code) {
    throw function (message, apiCode) {
        return ;
    };
}
console.log(apiError("Server side error", 500));
