import React, { Component } from 'react';
import { Home } from './home'


class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "mohammad saad",
            age: 18
        }
    }
    render() {
        return (
            <div>
                
             <Home Name={this.state.name} Age={this.state.age} />
            </div>
        )
    }
}

export default App