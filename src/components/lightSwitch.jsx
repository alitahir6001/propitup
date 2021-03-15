import React, { Component } from 'react';

class LightSwitch extends Component {
    constructor (props){
        console.log('testing');
        super(props);
        console.log(props);
        this.state = {
        age: props.age
        }
    }

    // this method goes inside of the LightSwitch Component
    flipSwitch = () => {
        this.setState({position: !this.state.position})
        console.log(this.state.position)
    }

    incrementNum = () => {
        console.log(this.state.age);
        this.setState({age: this.state.age++});
        console.log(this.state.age);
    }


    render() {
        return (
            <div>
                {/* <p> Age terribly</p> */}
                {/* <button onClick={  this.incrementNum }>Flip Switch</button>   */}
            </div>
        );
    }
}



export default LightSwitch
