import React from 'react'
import GoodItem from './GoodItem'

const GoodList = ({goods,addToCart}) => {

  return (
    <div className='GoodList'>
        {
            goods.map(el => < GoodItem item = {el} key={el.id} addToCart={addToCart}/>)
        }
    </div>
  )
}

export default GoodList