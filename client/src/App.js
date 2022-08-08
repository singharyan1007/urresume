import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home'
import UserForm from "./components/UserForm";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/>} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Routes>
        <Route path="/userform" element={ <UserForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
