import React, { useState } from 'react';

const Cars=({color,year ,children})=>{  //({children,color})
     
   // console.log("color is  "+pops)
 const colorInfo= color ? (<p className="marque"> Couleur : {color} </p>):(<p className="marque">Couleur: Neant </p>);
   //console.log(pops);
   
   if(children)
   {
    return (
        <div style={ {backgroundColor:'pink',with:'400px',padding:'10px',margin:'5px auto'} } >
                 <p className="marque">
                     Marque : {children}
                 </p>
                 <p className="marque">
                     Année : {year}
                 </p>
                 {colorInfo}
                 
        </div>
     );

   }
   else{

    return null;
   }

    

}
export default Cars;