import Home from './pages/Home';
import Meny from './pages/Meny';
import Information from './pages/Information';
import Kontakt from './pages/Kontakt';
import Special from './pages/Special';

import Header from './components/Header';
import Footer from './components/Footer';
import Likes from './components/Likes';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';



function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route  path='/meny' element={<Meny/>}/>
          <Route  path='/kontakt' element={<Kontakt/>}/>
          <Route  path='/information' element={<Information/>}/>
          <Route  path='/special' element={<Special/>}/>
        </Routes>
        <Likes />
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
