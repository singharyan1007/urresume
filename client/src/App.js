import "./App.css";
import React from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home'
import UserForm from "./components/UserForm";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/about" element={<About />}/>
        <Route path="/userform" element={ <UserForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
