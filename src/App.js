import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Ola from './componentes/Ola';
import Computador from './componentes/computador/Computador'
import Monitor from './componentes/computador/Monitor'
import Modelo from './componentes/heranca/Carro';

class App extends Component {
    constructor() {
        super();
        this.state = {
            nome: 'John'
        };
    }

    render() {
        let objCarro = new Modelo("Ford", "Mustang");

        return (
            <div>
                <Ola nome={this.state.nome}/>
                <p>Computador:</p>
                <Computador/>
                <p>Monitor</p>
                <Monitor/>

                <p>Objeto Carro: {objCarro.show()}</p>
            </div>
        );
    }
}


export default App;
