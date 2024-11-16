import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import  Red from './components/Red';
import  Blue from './components/Blue';
import Yellow from './components/Yellow';
import Green from './components/Green';
import Home from './components/Home';

function App() {


  return (
    <>
    <div id="navbar">
        <Link id="homeLink" to={"/"}>Home</Link>
        <Link id="blueLink" to={"/Blue"}>Blue Page</Link>
        <Link id="redLink" to={"/Red"}>Red Page</Link>
        <Link id="yellowLink" to={"/Yellow"}>Yellow Page</Link>
        <Link id="greenLink" to={"/Green"}>Green Page</Link>
      </div>
      <br />
    <div id="container">
      <div id="main-section">
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Blue" element={<Blue/>} />
        <Route path="/Red" element={<Red/>} />
        <Route path="/Yellow" element={<Yellow/>}/>
        <Route path="/Green" element={<Green/>}/>
        </Routes>
        </div>
    </div>
    </>
    
  )
}

export default App
