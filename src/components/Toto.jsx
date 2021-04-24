import React,{useState,Component} from 'react';

const Toto=(props)=>{

   console.log(props)  
   const btnReponseToto = props.letState.messageMaman !== null ? ( <button onClick={props.reponseToto}>Button toto</button>) :( <button disabled>Button toto</button>)
      

    return (
    <div>
       <h2>{props.name}</h2>
         <span>{btnReponseToto}</span>
         <p>{props.letState.messageToto}</p>
    </div>);

}
export default Toto