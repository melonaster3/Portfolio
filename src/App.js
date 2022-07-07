import './App.css';
import Navbar from './components/Navbar' ;
import Home from './components/Home' ;
import HomeCopy from './components/Home copy' ;
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
            <Navbar/>
      <HomeCopy/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
