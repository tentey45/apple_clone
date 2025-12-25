import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Iphone from './components/IphoneCard'
import Ipad from "./components/IpadCard";
import Twocard  from './components/Twocard';
import Slide from "./components/SlideShow"
import CardGrid from './components/CardGrid'; 
// import Promotion from "./components/Promotion"
export default function App() {
  return (
    <div>
      <Navbar />
      {/* <Promotion /> */}

      <Card />
      <Iphone />
      <Ipad />
    
      <Twocard />
      <Slide/>
    </div>
  )
}
