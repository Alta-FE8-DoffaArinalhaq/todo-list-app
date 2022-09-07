import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Homepage = () => {
    const navigate = useNavigate();
    const [todo,setTodo] = useState([]);
    const [iniId, setIniId] = useState(0);
    const [content, setContent] = useState('');

    useEffect(() =>{
        getData();
    },[]);

  

const getData= async()=>{
        
let config = {
    method: 'get',
    url: 'https://api.todoist.com/rest/v1/tasks',
    headers: { 
      'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
    }
  };
  
  await axios(config)
  .then((response)=> {
    console.log(response.data);
    setTodo(response.data);
  })
  .catch((error)=> {
    alert(error);
  });
      };

      const handleDetailPage=(item)=>{
        navigate(`/detail/${item.id}`, {
          state: {
            id:item.id,
            content:item.content,
          },
        });
      }

      

      const handleDelete = (item) => {
        let config = {
          method: "delete",
          url: `https://api.todoist.com/rest/v1/tasks/${item.id}`,
          headers: {
            Authorization: "Bearer d4716fb3744587524cd3ee81643ca60493c6ed31",
            Cookie: "csrf=c66f6c62c9a34cf8a5008fda8a6fcf55",
          },
        };
        axios(config)
          .then(function (response) {
            getData();
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      };

      const changeId=(item)=>{
        setIniId(item);
      }

const posting=()=>{
  var axios = require('axios');
var data = JSON.stringify({
  "content": content,
  "due_string": "tomorrow at 12:00",
  "due_lang": "en",
  "priority": 4
});

var config = {
  method: 'post',
  url: 'https://api.todoist.com/rest/v1/tasks',
  headers: { 
    'Authorization': 'Bearer d4716fb3744587524cd3ee81643ca60493c6ed31', 
    'Content-Type': 'application/json', 
    'Cookie': 'csrf=c66f6c62c9a34cf8a5008fda8a6fcf55'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  getData();
})
.catch(function (error) {
  console.log(error);
});

};

const changeData =(event)=>{
  setContent(event.target.value);
  getData();
}

  return (
    <>
    <NavBar/>
    <form>
    <input type="text" className='bg-slate-500 rounded-full text-white' onChange={changeData}/>
    </form>
      <button onClick={()=>posting()}>posting</button>
    {todo?todo.map((item, index) => {
            return (
              <div key={index}>
              <Card id={item.id} content={item.content} detail={()=>handleDetailPage(item)} handleDelete={()=>handleDelete(item)} />
              <button onClick={()=>changeId(item.id)}>dapatkan id</button>
              </div>
            );
          }):<></>}
    </>
  )
}

export default Homepage