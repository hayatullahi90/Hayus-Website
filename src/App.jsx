import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About'; 
import Services from './Components/Pages/Services';
import Fleet from './Components/Pages/Fleet';
import Projects from './Components/Pages/Projects';
import Careers from './Components/Pages/Careers';
import Media from './Components/Pages/Media';
import Contact from './Components/Pages/Contact';
import Vaccancies from './Components/Pages/Vaccancies';
import Footer from './Components/Footer';
import Engineering from './Components/Pages/Engineering';
import Installation from './Components/Pages/Installation';
import Procurement from './Components/Pages/Procurement';
import Construction from './Components/Pages/Construction';
import Operations from './Components/Pages/Operations';
import Laser from './Components/Pages/Laser';
import Manpower from './Components/Pages/Manpower';




function App() {

  return (
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/fleet' element={<Fleet />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/media' element={<Media />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/vaccancies' element={<Vaccancies />}/>
          <Route path='/engineering' element={<Engineering />} />
          <Route path='/procurement' element={<Procurement />}/>
          <Route path='/construction' element={<Construction />}/>
          <Route path='/installation' element={<Installation />}/>
          <Route path='/operations' element={<Operations />}/>
          <Route path='/laser' element={<Laser />}/>
          <Route path='/manpower' element={<Manpower />}/>
        </Routes>
        <Footer />
      </div>
  )
}

export default App
