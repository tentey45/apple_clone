import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Iphone17 from "./pages/Iphone17";
import Footer from './components/common/Footer';
import ScrollTop from './components/common/ScrollTop'


function App() {
  return (
    <>
    
   <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
        <Route path="/iphone17" element={<Iphone17 />} />
      </Routes>
         <Footer/>
    </>
 
  );
}

export default App;
