import React, { Component } from 'react';
import LightSwitch from './lightSwitch';


class PersonCard extends Component{
    constructor (props){
        console.log('testing');
        super(props);
        console.log(props);
        this.state = {
        age: parseInt(props.age)
        }
    }   

    incrementNum = () => {
                console.log(this.state.age);
                this.setState({age: this.state.age++});
                console.log(this.state.age);
        }


    render () {
        return(
            <div>  
                <h2>{this.props.fullName}</h2>
                {this.props.hairColor}
                {this.state.age}
                
                <p> Age terribly: </p> 
                <button onClick={  this.incrementNum }>Birthday Button</button>  
            
            </div>
        );
    }
}
            



export default PersonCard