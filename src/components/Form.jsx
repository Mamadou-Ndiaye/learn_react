import React from 'react';
import {useState,Component} from 'react';


import Smartphone from './Smartphone';

class Form extends Component{
    state={
        username:'',
        color :'',
        colors : [" ","green","blue","red","yellow "]
    }

    
    handlePseudo = (e) =>{
         this.setState({
             username: e.target.value
         })
    }

    handleColor = (event) =>{
        this.setState({
            color : event.target.value
        })
    }

    render()
    {
        return ( <div>
            <Smartphone/>
            <p className="pa">
                Formulaire
            </p>
            <form action="">
                <div>
                   <label htmlFor="">Pseudo</label>
                    <input type="text" value={this.state.username} onChange={this.handlePseudo}/>
                </div>
                <div>
                <label htmlFor="">Couleur</label>
                  <select value={this.state.color} name="" id="" onChange={this.handleColor}>
                    {
                        this.state.colors.map((color,index)=>{
                            return <option key={index} value={color}>{color}</option>
                        })
                    }
                  </select>
                 </div>
                
            </form>
            </div>) ;
    }
}
export default  Form;