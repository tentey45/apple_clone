import React from 'react'
import Navbar from '../components/common/Navbar'
import Card from '../components/home/Card'
import Iphone from '../components/home/IphoneCard'
import Ipad from "../components/home/IpadCard";
import Twocard  from '../components/product/Twocard';
import Slide from "../components/product/SlideShow";
import Footer from "../components/common/Footer"
import CardGrid from '../components/home/CardGrid'; 

// import Promotion from "./components/Promotion"
export default function App() {
  return (
    <div className="app-container">
    
      {/* <Promotion /> */}

      <Card />
      <Iphone />
      <Ipad />
    
      <Twocard />
      <Slide/>
  
    </div>
  )
}
