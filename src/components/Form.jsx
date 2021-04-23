import { useState } from "react";
import React  from 'react';

const TodoForm = ( { addTodo } ) => {
   const [todo,setTodo] = useState("");
   console.log(todo)

   const handleSubmit  = event => {
       event.preventDefault();
       if (!todo) return;
       addTodo(todo);
       setTodo("");

   };

    return (
        <form onSubmit = {handleSubmit}>
         <input type="text" className="input" value={todo}
         onChange={event=>setTodo(event.target.value)}
         />
           
        </form>
    );
};

export default TodoForm;