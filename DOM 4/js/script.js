var novoParagrafo = document.createElement("p") // criando elemento P

var texto = document.createTextNode("Este é o conteúdo do paragráfo! teste") // texto que vai ser aplicado ao elemento P

novoParagrafo.appendChild(texto) // texto aplicado no elemento p

var body = document.querySelector("body")

body.appendChild(novoParagrafo) // elemento aplicado no corpo HTML

// inserindo em um container

var container = document.getElementById("container")

var el = document.createElement('span')

el.appendChild(document.createTextNode("texto do span")) // aqui ele ja fez a mistura da aplicação do texto no elemento economizando linha e tempo

container.appendChild(el)