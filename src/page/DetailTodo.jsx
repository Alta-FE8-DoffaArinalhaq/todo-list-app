import React,{useState,useEffect} from 'react';
import axios from "axios";
import {useLocation} from 'react-router-dom';

const DetailTodo = ({id,content,description}) => {
    const location = useLocation();
    // const [subject,setSubject]=useState('');
    // const [deskripsi,setDeskripsi]=useState('');
    const [wadah, setWadah]=useState([]);
    const [konten, setKonten]=useState('');


const handleChange =()=>{
var data = JSON.stringify({
  "content": konten
});

var config = {
  method: 'post',
  url: `https://api.todoist.com/rest/v1/tasks/${location.state.id}`,
  headers: { 
    'Authorization': 'Bearer d4716fb3744587524cd3ee81643ca60493c6ed31', 
    'Content-Type': 'application/json', 
  },
  data : data
};

axios(config)
.then(function (response) {
  setWadah(response.data);
})
.catch(function (error) {
  alert('error cuy');
});
}

const handleSubject =(event)=> {
  event.preventDefault();
  setWadah(event.target.value);
  console.log(wadah);
};

const changeContent =(event)=>{
  setKonten(event.target.value);
};

  return (
    <>
    <form>
    <input type="text" className='bg-slate-500 rounded-full text-white' onChange={changeContent} placeholder={content}/>
    </form>
      <button onClick={()=>handleChange()}>posting</button>


    <form onSubmit={()=>handleChange()}>
    <label for="subject">Subject</label>
    <input className='bg-navy-600 rounded-full'type="text" id="subject" name="Subject" placeholder={location.state.content}  onChange={(event) => handleSubject(event.target.value)}/>


    <button type="submit">perbarui data</button>
    </form>
    </>
    
  )
};

export default DetailTodo