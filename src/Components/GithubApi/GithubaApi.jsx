import {useEffect,useState} from 'react'
import Card from '../Card/Card';

const GithubaApi = () => {
    const [apiData, setApiData] = useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users")
        .then((res)=> res.json())
        .then((data)=> 
         setApiData(data))
    }
    )
    
  return (
    <div>
        <ul>{apiData.map((item) => (
                   <Card key={item.id} name={item.login} img={item.avatar_url} />
                ))}</ul>
      
    </div>
  )
}

export default GithubaApi
