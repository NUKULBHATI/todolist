import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './components/navbar'


import './App.css'



function CurrentDateDisplay() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (todos.length === 0) return;

    const now = new Date();
    if (
      now.getDate() !== currentDate.getDate() ||
      now.getMonth() !== currentDate.getMonth() ||
      now.getFullYear() !== currentDate.getFullYear()
    ) {
      settodos([]);
    }
  }, [currentDate]);


  const handleAdd = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    settodo("");
    console.log(todos);
  };

  const handlechange = (e) => {
    settodo(e.target.value)
  };

  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete this task?")) return;
    const newTodos = todos.filter(item => item.id !== id);
    settodos(newTodos);
  };

  const handleCheckbox = (todo) => {
    if (!todo) return;
    console.log(todo.id);
  }


  return (
    <div className="bg-black gap-3.5 h-screen space-y-5">
      <Navbar />
      <div className="container bg-blue-400 mx-auto rounded-lg h-5/6 max-md:w-4/5">
        <div className="first">
          <h1 className='text-3xl font-bold text-center pt-5'>TODAY</h1>
          <p className='text-xl text-center'>Today's Date: {currentDate.toLocaleDateString()}</p>
        </div>
        <div className="addtodo text-center pt-7">
          <input onChange={handlechange} value={todo} type="text" placeholder="Add your todo" className='w-1/2 h-10 rounded-lg pl-3 text-lg bg-gray-900 text-white' />
          <button onClick={handleAdd} className='bg-gray-700 text-white px-4 py-2 rounded-lg ml-3 hover:bg-gray-900'>Add</button>
        </div>
        <div className="yourtodo text-xl text-center p-2 font-medium">Your Todo's</div>
        <div className="todos">
          {todos.map(items => {
            return (
              <div className='flex justify-center gap-[25px] items-center p-3' key={items.id}>
                <input name={items.id} onChange={() => handleCheckbox(todo)} type="checkbox" className='w-5 h-5 items-center ' />

                <div className=' flex w-1/2 h-10 rounded-lg p-2 text-lg bg-gray-900 text-white gap-5'>{items.todo}</div>

                <button onClick={() => handleDelete(items.id)} className='bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-800'>
                  <span className="material-symbols-outlined">
                    delete
                  </span>
                </button>
              </div>)
          })}
        </div>
      </div>
    </div>


  )
}


export default CurrentDateDisplay

