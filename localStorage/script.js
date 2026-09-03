const f_texto = document.getElementById('ifTexto')
const p_texto = document.getElementById('p_texto')
const btn_texto = document.getElementById('btn_texto')

btn_texto.addEventListener('click', (evt)=>{

})

let num = 10
let curso ='JS'

//localStorage.setItem("numero", num)
//localStorage.setItem("numero", 33)

//alert(localStorage.getItem('numero'))
//alert(localStorage.getItem(localStorage.key(0)))

//alert(localStorage.length)

localStorage.clear()

sessionStorage.setItem('nome', 'Brenno')
sessionStorage.setItem('canal', 'CFB Cursos')
sessionStorage.setItem('curso', curso)