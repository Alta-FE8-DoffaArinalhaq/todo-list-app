import React from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const Card = ({ content, detail, id, handleDelete }) => {
  return (
    <>
      <div className="bg-slate-400 w-60">
        <h1>{content}</h1>
        <button className="rounded-full bg-yellow-600" onClick={detail}>
          Detail
        </button>
        <button className="rounded-full bg-yellow-600" onClick={handleDelete}>
          delete
        </button>
      </div>
    </>
  );
};

export default Card;