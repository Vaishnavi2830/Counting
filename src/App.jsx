import './App.css'
import { useState } from 'react';

function App() {
  const [count, setCount]= useState(0)
  return (
    <div>
      <div className="box">
        <h1 className='count'>Counter</h1>
        <div className='count'>
          {count}
        </div>
        <div className='button'>
          <button className="add" type="button" onClick={()=>{setCount (count+1)}}>
            Add</button>
          <button className="add" type="button" onClick={()=>{setCount(0)}}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
