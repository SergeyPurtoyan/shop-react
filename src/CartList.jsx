import React from 'react'
import CartItem from './CartItem'

const CartList = ({orders,incQuantity,decQuantity, removeFromCart}) => {
      const total = orders.reduce((sum,el) => sum + el.price * el.quantity,0);
  return (
    <div className='CartList fixed top-36 right-4 bg-gray-500  rounded-lg '>
        {
          orders.map(el => <CartItem  
                                    key={el.id}
                                    item={el}
                                    incQuantity={incQuantity}
                                    decQuantity={decQuantity}
                                    removeFromCart={removeFromCart}
                                    />)
        }
        <div className='total m-4 text-3xl border-b-2'> Total: {total}</div>
    </div>
  )
}

export default CartList