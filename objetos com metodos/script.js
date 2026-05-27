let pessoa = {
    nome: 'Brenno',
    idade: 18,
    falar: function(){
        console.log('Olá, tudo bem?');
        
    },
    soma: function(a, b){
        return a + b
    }
}

console.log(pessoa.nome);

pessoa.falar()

console.log(pessoa.soma(2, 4));

