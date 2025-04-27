import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../component/navbar'
import Footer from '../component/footer'
import Section1 from '../component/section1'
import Section3 from '../component/section3'
import Section4 from '../component/section4'
import Section5 from '../component/section5'
import Section6 from '../component/section6'
import Properties from '../component/rentPage/properties'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Navbar/>
       <Section1/>
       <Properties/>
       <Section3/>       
       <Section4/>       
       <Section5/>       
       <Section6/>       
       <Footer/>
    </div>
   
  )
}

export default App
