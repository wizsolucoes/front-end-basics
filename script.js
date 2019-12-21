numeros = []
crescente = []
decrescente = []
par = []
ímpar = []

function gerar(){
    var max = document.getElementById('num').value;
    var result = Math.floor(Math.random() * 100 + 1);

    if(this.numeros == null || this.numeros.length == 0){ 
        for (i=0; i < max; i++){
            var sort = Math.floor(Math.random() * 100 + 1)
            this.numeros.push(sort)
        } 
    } else{
        this.numeros = []
        for (i=0; i < max; i++){
            var sort = Math.floor(Math.random() * 100 + 1)
            this.numeros.push(sort)
        }
    }

    document.getElementById("random_text").innerHTML = this.numeros.toString().replace(/,/g, ', ');
    console.log('O número foi: ', max)
    console.log('O array é: ', numeros)
    console.log('--------------')

    this.crescente = this.numeros
    this.crescente.sort(sortCrescente);
    console.log('Ordenado', this.crescente)
    // document.getElementById("crescent").innerHTML = this.crescente.toString().replace(/,/g, ', ');

    this.decrescente = this.numeros
    this.decrescente.sort(sortDescrescente);
    console.log('Desordenado', this.decrescente)
    // document.getElementById("decrescent").innerHTML = this.decrescente.toString().replace(/,/g, ', ');
}

function sortCrescente(a, b){
    return (a - b)
}

function sortDescrescente(a, b){
    return (b - a)
}