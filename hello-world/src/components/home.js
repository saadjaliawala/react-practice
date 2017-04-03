import React, { Component } from 'react';


export class Home extends Component {
 constructor(props) {
        super(props)
        this.state = {
            name: props.Name ,
            age : props.Age
            
        }
    }
    render() {
        return (
            <div>
              hello   {this.state.name} <br/>
              {this.state.age}
              
            </div>
        )
    }
}