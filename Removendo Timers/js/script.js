// clearTimeout

let x = 0

let myTimer = setTimeout(function() {

    console.log("o x é 0")
    
}, 1500)

x = 5

if(x > 0){
    clearTimeout(myTimer)

    console.log("O x passou de 0")
}

// clearInterval

let myInterval = setInterval(function(){

    console.log("Imprimindo interval")

}, 500)

setTimeout(function(){

    console.log("Não precisamos mais repitir!")
    clearInterval(myInterval)

}, 1500)