import React from 'react';
import { BrowserRouter as Router ,Routes , Route} from "react-router-dom";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </Router>    

    // <>
    //   <Header/>
    //   <Home/>
    //   <Projects/>
    //   <Resume/>
    //   <Contact/>
    // </>
  );
}

export default App;
