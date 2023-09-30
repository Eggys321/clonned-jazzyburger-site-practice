import React from 'react';
import ss from '../assets/Group 28 (2).jpg';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='bg-black '>
       <div className='container bg-black border border-2 footer-container'>
        <img src={ss} alt="" className='bg-danger border border-4 border-danger text-black'/>
       </div>
    </div>
  )
}

export default Footer