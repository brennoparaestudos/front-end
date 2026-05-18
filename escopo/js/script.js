var x = 1 // escopo global
var y = 3 // escopo global

console.log(x, y)
function teste(){

    var z = 0 // escopo local

    console.log(z)

}

teste()