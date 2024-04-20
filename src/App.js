import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter baseName = "localhost:3000">
      <Routes>
        <Route path = "/" element ={Home}/>
      </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
