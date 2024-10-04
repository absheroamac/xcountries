import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import  { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([])

  const handleAPI = async ()=>{

    try{

      const res = await axios.get("https://xcountries-backend.azurewebsites.net/all");

      if(res.status===200){
        console.log(res.data);

        setData(res.data);
        
      }


    }
    catch(err){

      if(err.response){
        console.log(err.response.data);
      }

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
            <img src={element.flag} alt={element.alt}/>
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
