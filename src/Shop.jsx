import { useEffect, useState } from "react"
import GoodList from "./GoodList";
import CartList from "./CartList";
import Loader from "./Loader";


const Shop = () => {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orders,setOrders] = useState([]);
    const [isCartShow, setCartShow] = useState(false);
    const [goodCount, setGoodCount] = useState(0);
    


    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(arr =>{
        setGoods(arr);
        setLoading(false);

      })

    }, []);

    useEffect(() => {
     let sum = 0;
     for(let elem of orders){
        sum += elem.quantity;
     }
     setGoodCount(sum);
    }, [orders]);
    

    const addToCart = (item)=>{
        const itemIndex = orders.findIndex(el => el.id === item.id);
        if(itemIndex === -1){
            const newItem = {
                ...item,
                quantity: 1
            };
            setOrders([...orders,newItem]);
        }else{
            const newOrders = orders.map((el,index) =>{
                if(index === itemIndex) el.quantity = el.quantity + 1;
                return el;
            });
            setOrders(newOrders);
        }
    }


    const removeFromCart = (id) =>{
        const newOrders = orders.filter(el => el.id !== id);
        setOrders(newOrders);
    }

    const incQuantity = (id)=>{
        const newOrders = orders.map(el =>{
          if(el.id === id) el.quantity = el.quantity+1;
          
          return el;
        });
        setOrders(newOrders)
       }

    const decQuantity = (id)=>{
        const newOrders = orders.map(el =>{
            if(el.id === id) el.quantity = el.quantity > 0 ? el.quantity-1 : 0;
            
            return el;
        });
        setOrders(newOrders);
    }

    const handleCartShow = ()=>{
        setCartShow(!isCartShow);
    }
    


   
    
  return (
    <div className='Shop'>
        {loading && <Loader/>}

        <GoodList goods={goods} addToCart={addToCart} />

        <div className="order-count">{goodCount}</div>
        <i className="fa-solid fa-cart-shopping cart" onClick={handleCartShow}></i>

        {isCartShow && < CartList
                                orders={orders}
                                incQuantity={incQuantity}
                                decQuantity={decQuantity}
                                removeFromCart={removeFromCart}
                                />

        }


    </div>
  )
}

export default Shop