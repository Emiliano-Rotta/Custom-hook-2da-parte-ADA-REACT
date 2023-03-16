import {BrowserRouter, Routes, Route} from "react-router-dom"
import Ultimos from "./components/Ultimos"
import Populares from "./components/Populares"
import Home from "./components/Home"
import './App.css';


function App() {

  return (
    <BrowserRouter>
    
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/populares" element={<Populares />} />
          <Route path="/ultimos" element={<Ultimos />} />
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
