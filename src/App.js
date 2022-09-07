import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';  
import HomePage from "./page/HomePage";
import DetailTodo from "./page/DetailTodo";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailTodo />} />
      </Routes>
    </Router>
  );
}

export default App;