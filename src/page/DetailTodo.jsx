import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import NavBar from '../components/NavBar';
import { useLocation } from 'react-router-dom';

const DetailTodo = ({ id, content, description }) => {
  const location = useLocation();
  const [wadah, setWadah] = useState([]);
  const [konten, setKonten] = useState('');

  const handleChange = () => {
    var data = JSON.stringify({
      content: konten,
    });

    var config = {
      method: 'post',
      url: `https://api.todoist.com/rest/v1/tasks/${location.state.id}`,
      headers: {
        Authorization: 'Bearer d4716fb3744587524cd3ee81643ca60493c6ed31',
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setWadah(response.data);
      })
      .catch(function (error) {
        alert('error');
      });
  };

  const handleSubject = (event) => {
    event.preventDefault();
    setWadah(event.target.value);
    console.log(wadah);
  };

  const changeContent = (event) => {
    setKonten(event.target.value);
  };

  return (
    <>
          <NavBar />
      <div className="container">
        <Form className="form">
          <Form.Label className="label">{location.state.content}</Form.Label>
          <Form.Control className="ctrl" type="text" onChange={changeContent} placeholder={content} />
          <Button className="btn " onClick={() => handleChange()}>
            Posting
          </Button>
        </Form>
      </div>
    </>
  );
};

export default DetailTodo;
