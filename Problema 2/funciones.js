class nodos{
    constructor(){
        this.arrayAleatorioPositivo = []
    }

    colocarNumeroAleatorio(iteracion){
        for(let i=0; i<=iteracion; i++){
            this.arrayAleatorioPositivo[i] = Math.floor(Math.random() * 11);
        }
        return this.arrayAleatorioPositivo;
    }

}

const init = new nodos();

//El parametro es para colocar cuantos elementos quieres agregar al array de numeros positivos aleatorios
console.log(init.colocarNumeroAleatorio(10));