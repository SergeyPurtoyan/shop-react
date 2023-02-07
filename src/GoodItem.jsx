import React from 'react'

const GoodItem = ({item,addToCart}) => {
  return (
    <div className='GoodItem shadow-2xl m-1 p-1 text-center hover:shadow-inner rounded-lg '>
        <img src={item.image} alt={item.titel} className=' w-full h-96  rounded-lg'/>
        <h2>{item.title}</h2>
        <p className='price font-bold text-3xl'> Price: {item.price}</p>
        <p>{item.description.length > 400 ? item.description.slice(0, 400)+ '...' : item.description } </p>
        <button className=' bg-slate-500 rounded-lg p-1 ' onClick={()=>addToCart(item)}>add to cart</button>
    </div>
  )
}

export default GoodItem