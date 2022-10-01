import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
