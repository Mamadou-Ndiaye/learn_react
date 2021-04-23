
import './App.css';
import React, {useState} from 'react';
import Todo from './components/Todo';
import TodoForm from './components/Form';
import Mycars from './components/Mycars';

function App() {
  const data=[{text:"Learn  React JS    " ,isCompleted:false},
             {text:"Learn  React JS     ",isCompleted:false},
            {text:"Learn Angular",isCompleted:false},
            {text:"Learn Angular",isCompleted:false}
             ];
   const [todos,setTodos] = useState(data);

   const addTodo = text =>{
     const newTodo = [...todos ,{text} ];
     setTodos(newTodo);

   };

   const completedTodo = (index) =>{
     const newTodos = [...todos];
     newTodos[index].isCompleted=true;
     setTodos(newTodos);
   }

   
  const montitle={ titre:"Mon Catalogue de Voiture"};

  return (
    <div className="app">
    {/*   <div className="todo-list">
          {
           todos.map((todo,index)=>
           <Todo key={index} 
            index={index} 
            todo={todo} 
            completedTodo={completedTodo}
            />
          )}
          <TodoForm addTodo={addTodo} />
      </div> */}
      <Mycars title={montitle.titre} ></Mycars>
    </div>
  );
}

export default App;
