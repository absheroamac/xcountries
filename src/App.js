import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import  { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([])

  const handleAPI = async ()=>{

    try{

      const res = await fetch("https://xcountries-backend.azurewebsites.net/all");

      if(res.status===200){

        const data = await res.json()
        console.log(data);

        setData(data);
        
      }


    }
    catch(err){

      console.log("API Error " + err);

    }



  }

  useEffect(()=>{
    handleAPI();


  },[])
  return (
    <div className="App">
      <div className='grid-container'>
      {

        data.map((element)=>(

          <div className='card'>
            <img src={element.flag} alt={`Flag of element.name`}/>
            <h2>{element.name}</h2>
          </div>

        )

        )
}

      </div>
    </div>
  );
}

export default App;
