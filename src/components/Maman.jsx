import React from 'react';
import {Component, useState}  from 'react'

import Toto from './Toto';

class Maman extends Component{
    state = {
        messageMaman: null,
        messageToto:   null
    }
    ordreMaman = ()=>{
        this.setState({
            messageMaman:"Va ranger ta chambre"
        })
    }
    reponseToto = ()=>{
        this.setState({
            messageToto:"D'accord Maman"
        })
    }

    render(){
        return (<div>
            <h1> Maman </h1>
             <button onClick={this.ordreMaman} className="maman">Ordre de la mère</button>
            <p className="mes">{this.state.messageMaman}</p>
            <hr/>
            <Toto  name="Toto"  reponseToto={this.reponseToto}  letState={this.state} />
           </div>);
    }
}
export default Maman;