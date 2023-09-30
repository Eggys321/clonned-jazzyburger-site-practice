import React, { useEffect } from 'react'
import Hero from '../components/home/Hero';
import Main from '../components/home/Main';


const Home = () => {
  useEffect(()=>{
    document.title = "Home | Page"
  })
  return (
    <div className='container'>
        <Hero/>
        <Main/>
    </div>
  )
}

export default Home