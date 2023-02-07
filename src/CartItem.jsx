import React from 'react'

const CartItem = ({item,incQuantity,decQuantity,removeFromCart}) => {
  return (
    <div className='CartItem  border-b'>
        <img src={item.image} className=' w-10 h-10  rounded-lg'/>
        <span>{item.title.length > 40 ? item.title.slice(0, 40)+ '...' : item.title } </span>
        <button className=' rounded-sm text-lg bg-white w-5 m-1' onClick={()=> decQuantity(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button className=' rounded-sm text-lg bg-white w-5 m-1' onClick={()=> incQuantity(item.id)}>+</button>
        <span>  =  </span>
        {item.price * item.quantity}$
        <button className=' rounded-sm text-lg bg-white w-5 m-1' onClick={()=> removeFromCart(item.id)}>x</button>
    </div>
  )
}

export default CartItem