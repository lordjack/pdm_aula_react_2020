import React from 'react';

class Computador extends React.Component {
    constructor() {
        super();
        this.state = {processador: 'intel i5', memoria: 'DDR4', hd: '500Gb'};
    }

    render() {
        return <h2>Meu processador é um: {this.state.processador}, minha memória é: {this.state.memoria} e meu HD é de:
            {this.state.hd}</h2>;
    }
}

export default Computador;