import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [val,setVal] = useState([]);

  function Datafetch() {
    fetch("https://randomuser.me/api/?results=10").
    then((res) => res.json()).
    then((datas) =>{
    //  console.log(datas.results);
     return setVal(datas.results)  
    }).
    catch((err) => console.log(err)) 
  }
  useEffect(() => {
    Datafetch()
    // console.log(Datafetch());
  },[])
  
 

  return (
    <div>
   
    {val.map((el) => (
      <div key={el.id.name}>
        <img src={el.picture.thumbnail} alt="" className='img' />
        <p>{el.name.first}</p>
        <h2>{el.name.last}</h2>
        <h3>{el.email}</h3>
      </div>
    ))}
    </div>
  )
}

export default App
