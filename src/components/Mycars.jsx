 import React,{Component} from 'react';
 import Cars from './Cars';

 function Mycars({title}){
         
        //console.log("pops is" +title);
         
        const noCopy=()=>{
                alert('merci de ne pas copier');
        }
        const addStyle=(e)=>{
                if(e.target.classList.contains('styled'))
                {
                        e.target.classList.remove('styled');
                }
                else{
                        e.target.classList.add('styled');
                }
                 
        }
         
         return (
        <div className="myCars">
                <h1 onMouseOver={addStyle}> {title}</h1>
                <p onCopy={noCopy}>Appeler setState avec un objet, ça fait quoi ? Ça envoie une série de modifications à l’état local du composant. Il faut bien comprendre que ce n’est pas le nouvel état dans son intégralité, mais juste des différences. C’est pratique, car ça évite de toujours devoir envoyer un état complet ; si on veut juste changer une propriété de l’état</p>

                <Cars color="red">Ford </Cars>
                <Cars>Mercedes</Cars>
                <Cars color='green'></Cars>
        </div>
                   
         );
 }

 export default Mycars;