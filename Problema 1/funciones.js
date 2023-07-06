class Arreglos{
    constructor(){
        this.arrayImposibleRepetir = [];
        this.index = 0;
    }

    push(datos){
        for(let i=0; i<=this.arrayImposibleRepetir.length; i++){
            if(this.arrayImposibleRepetir[i] != datos){
                this.arrayImposibleRepetir[this.index] = datos;
                this.index++;
                return console.log(this.arrayImposibleRepetir);
            }else{
                return console.log("Ese dato ya existe, por favor, agruegue otro");
            }
        }
    }
}

const arreglo = new Arreglos();

arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(1);