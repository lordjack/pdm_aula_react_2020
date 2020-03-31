class Carro {
    constructor(nome) {
        this.marca = nome;
    }

    present() {
        return 'Eu tenho um ' + this.marca;
    }
}

class Modelo extends Carro {
    constructor(nome, mod) {
        super(nome);
        this.modelo = mod;
    }
    show() {
        return this.present() + ', seu modelo é ' + this.modelo
    }
}

export default Modelo;