
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { add, del } from './redux/action/action';
import { useState } from 'react';

function App() {
  const cars=useSelector(state=>state.car)
  console.log(cars);
  const dispatch=useDispatch()
  const [model,setModel]=useState("")
  const [price,setprice]=useState("")
  var data={model:model,price:price,id:3}
  console.log(data)
  const addcar=()=>{
   
    dispatch(add(data))
  }
  
  return (
    <div className="App">
      <input type='text' placeholder='car model' onChange={(e)=>setModel(e.target.value)} /> 
      <input type='text' placeholder='car price'onChange={(e)=>setprice(e.target.value)}/>
       <button onClick={addcar} >add</button>
    {cars.map(elt=>
      <div> 
        <h1>
          {elt.model}
        </h1>
        <p>{elt.price}</p>
        <button onClick={()=>dispatch(del(elt.id))}>delete</button>
         </div>
      )}

    </div>
  );
}

export default App;
