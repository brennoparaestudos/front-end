// inserir click

let btn = document.getElementById('btn')

console.log(btn);

btn.addEventListener("click", function(){

    console.log('clicou');

    console.log(this)

    this.style.color = 'red'
    

})


// click afeatando outros elementos

let title = document.getElementById('title')

title.addEventListener("click", function(){

    let subtitle = document.querySelector(".subtitle")

    subtitle.style.display = 'none'

})


// double click

let subtitle = document.querySelector('.subtitle')

subtitle.addEventListener("dblclick", function(){

    console.log("click duplo")

})