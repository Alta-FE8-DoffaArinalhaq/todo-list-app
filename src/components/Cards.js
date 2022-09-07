import React from 'react';
import axios from 'axios';
import '../style/Card.css';
import { Card, Button } from 'react-bootstrap';

const Cards = ({ content, detail, id, handleDelete }) => {
  return (
    <div className="container">
      <Card bg="dark" className="card">
        <Card.Header className="head">{content}</Card.Header>
        <Card.Body className="body">
          <Button className="btn1" onClick={detail}>
            Detail
          </Button>
          <Button className="btn2" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
