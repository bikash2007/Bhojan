import { useState } from 'react'
import { Navbar } from './components/Navbar'
import bgImg from './media/3.jpg'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
      <div className=' object-cover' style={{background:`url(${bgImg})`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
        <div className='min-h-screen w-full bg-white/50 backdrop-blur-2xl  '>
         <Navbar/>
         <Outlet/>
        </div>
     </div>
    </>
  )
}

export default App
