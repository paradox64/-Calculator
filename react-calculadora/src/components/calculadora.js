import React from 'react';
import '../style/calculadora.css'

class Calculadora extends React.Component{
    constructor(props) {
        super(props);
        this.sum=this.sum.bind(this);
        this.mult=this.mult.bind(this);
        this.dec=this.dec.bind(this);
        this.div=this.div.bind(this);
        this.restart=this.restart.bind(this);
        this.state = {
          number: 0,
          result: 0,
          lastOperation:""
        };
      }

    render(){
    return(
        <div id="calculadora-container">
            <h1> {this.state.lastOperation} {this.state.result} </h1>
            <input id="inputNumber" type="number" value={this.state.number}   onChange={e => this.setState({number: e.target.value})} />
            <div id="buttons">
            <button id="button-sum"     onClick={()=>this.sum(this.state.number)}>+</button>
            <button id="button-mult"    onClick={()=>this.mult(this.state.number)}>*</button>
            <button id="button-dec"     onClick={()=>this.dec(this.state.number)}>-</button>
            <button id="button-div"     onClick={()=>this.div(this.state.number)}>/</button>
            </div>
            <button id="button-restart" onClick={()=>this.restart()}>restart</button>
        </div>
    )}
    
    restart(){
        this.setState({result:0,lastOperation:""})
    }


    div(value){
        let aux=this.state.result + " / " + value +" = ";
        value=Number(this.state.result) / Number(value);
        this.setState({result:value,lastOperation:aux})
    }


    dec(value){
        let aux=this.state.result + " - " + value +" = ";
        value=Number(this.state.result) -Number(value);
        this.setState({result:value,lastOperation:aux})
    }

    mult(value){
        let aux=this.state.result + " * " + value +" = ";
        value=Number(value)* Number(this.state.result);
        this.setState({result:value,lastOperation:aux})
    }
   
    sum(value){
        let aux=this.state.result + " + " + value +" = ";
        value=Number(value)+Number(this.state.result);
        this.setState({result:value,lastOperation:aux})
    }
}

export default Calculadora;