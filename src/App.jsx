import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
 const [data,setData]=useState(null)
  const FetchData = async ()=>{
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
    useEffect(()=>{
      FetchData();
    },[])
  
  return (
    

      <div className="App">
       {data && data.map((val) => (
        <div className='nothing' key={val.id}>
          <h3 className='hi'>{val.id},{val.title}</h3>          
          <img src={val.thumbnailUrl} alt={val.title}/>
        </div>
      ))}
      </div>

    
  )
}

export default App
