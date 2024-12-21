import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Contact from './components/Contact';
import Project from './components/Project';
import Resume from './components/Resume';
import About from './components/About';
import Sreejith from './components/Sreejith';
import { useEffect, useState } from 'react';
import Skills from './components/Skills';
function App() {
<<<<<<< HEAD
  const [isLoading, seIsLoading] = useState(true);
=======
  const [isLoading, setisLoading] = useState(true);
>>>>>>> 628412fc260b6a99f1f198897dc504572973849a
  const [View, setView] = useState(<Sreejith />);

  useEffect(() => {
    setTimeout(() => {
      setView(
        <><Navbar />
          <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/education' element={<Education />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/sreejith' element={<Sreejith />} />
            <Route path='/skills' element={<Skills/>} />
         
          </Routes></>
      )
    }, 1800);
  }, []);

  return (
    <div className="App">
      {View}
    </div>
  );
}

export default App;
