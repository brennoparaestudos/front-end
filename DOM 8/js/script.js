// adicionar atributo

let title = document.querySelector("#title")

title.setAttribute("class", 'testando-atributo')

console.log(title)

let btn = document.querySelector("#btn")

btn.setAttribute('disabled', "disabled")

let subtitle = document.querySelector('.subtitle')

subtitle.setAttribute("id", 'titulo-2')


// remover atributo

let lista = document.getElementById('lista')

lista.removeAttribute('id')