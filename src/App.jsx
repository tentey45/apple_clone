import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Iphone from './components/IphoneCard'
import Ipad from "./components/IpadCard";
import Twocard  from './components/Twocard';
import Slide from "./components/SlideShow";
import Footer from "./components/Footer"
import CardGrid from './components/CardGrid'; 
// import Promotion from "./components/Promotion"
export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      {/* <Promotion /> */}

      <Card />
      <Iphone />
      <Ipad />
    
      <Twocard />
      <Slide/>
      <Footer />
    </div>
  )
}
