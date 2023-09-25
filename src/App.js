
import Home from './AllRoutes/Home';
import './App.css';
//import Navbar from './Components/Navbar';
//import Hello from './Hello';
//import Home from './AllRoutes/Home';
import About from './AllRoutes/About'
import Contact from './AllRoutes/Contact'
import Service from './AllRoutes/Service'
import {  Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
  

      <Routes>
       


          <Route element={<Home />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Contact />} path='/contact' />
          <Route element={<Service />} path='/service' />

        
          
    </Routes>




   

    





    </div>
  );
}

export default App;
