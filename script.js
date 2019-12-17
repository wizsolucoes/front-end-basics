numeros = []
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

    document.getElementById("random").innerHTML = this.numeros;
    console.log('O número foi: ', max)
    console.log('O array é: ', numeros)
    console.log('--------------')

}