import React from 'react';


function Todo({ todo ,completedTodo}) {
    
  return  <div className="todo" >
              {todo.text}
              <div className="buttons">
                <button className="complete">Terminer</button>
                <button className="button">Supprimer</button>
              </div>
         </div>
    ;
  }
  
export default Todo;
  