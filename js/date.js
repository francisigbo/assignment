const now = new Date();

// console.log(now.getDate())
// console.log(now.getMonth())
// console.log(now.getTime())
var i = document.getElementById('root')

var b = `Hour::${now.getHours()}  Min::${now.getMinutes()} Sec::${now.getSeconds()}`
setInterval(function () {

    i.innerHTML = b;


}, 1000);