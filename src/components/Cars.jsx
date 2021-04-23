import React, { useState } from 'react';

const Cars=(pops)=>{  //({children,color})
 
   // console.log(pops.children)
 const colorInfo= pops.color ? (<p className="marque"> Couleur : {pops.color} </p>):(<p className="marque">Couleur: Neant </p>);
   //console.log(pops);
   
   if(pops.children)
   {
    return (
        <div style={ {backgroundColor:'pink',with:'400px',padding:'10px',margin:'5px auto'} } >
                 <p className="marque">
                     Marque : {pops.children}
                 </p>
                 {colorInfo}
                 
        </div>
     );

   }
   else{

    return (
        <div style={ {backgroundColor:'pink',with:'400px',padding:'10px',margin:'5px auto'} } >
                <p className="data">Pas de data!</p>
        </div>
     );
   }

    

}
export default Cars;