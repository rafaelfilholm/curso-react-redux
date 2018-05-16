export default class Pessoa {
    constructor(nome = 'desconhecido'){
        this.nome = nome
    }

    toString(){
        return `Pessoa: ${this.nome}`
    }
}