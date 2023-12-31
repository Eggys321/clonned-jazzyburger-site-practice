import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CartComponent = () => {
  const [wk,setWk] = useState(2)
  // useEffect(()=>{
  //   window.location.reload()

  // },[])
  return (
    <div className="container shadow-lg p-2 rounded bg-light ">
    <div>
      <p className="text-center fw-bolder">Empty Bag</p>
      <hr />
   {wk > 0 ? <Link className='btn btn-success btn-lg' to='/CheckOut'>proceed to checkout</Link>  : <button className="btn btn-success btn-lg">Continue shopping</button>}
   
      {/* <button className="btn btn-success btn-lg">Continue shopping</button> */}
      {/* <Link className='btn btn-success btn-lg' to='/CheckOut'>proceed to checout</Link> */}
    </div>
  </div>
  )
}

export default CartComponent