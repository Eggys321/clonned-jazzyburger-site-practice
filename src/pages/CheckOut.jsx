import React, { useEffect } from 'react'
import CheckOutComponent from '../components/checkout/CheckOutComponent'

const CheckOut = () => {
  useEffect(()=>{
    document.title = 'Checkout | Page'
  })
  return (
    <div>
        <CheckOutComponent/>
    </div>
  )
}

export default CheckOut