// criar um elemento

let el = document.createElement('h3')

el.classList = 'testando-elemeneto'

let texto = document.createTextNode("Este é o texto h3")

el.appendChild(texto)

console.log(el)

// selecionar o elemento que quero trocar

let title = document.querySelector("#title")

// selecionar o pai do el

let pai = title.parentNode

// trocar elementos

pai.replaceChild(el, title)