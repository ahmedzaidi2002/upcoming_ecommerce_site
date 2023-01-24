import React from 'react'
import burger1 from "../../assets/burger1.png"
import burger2 from "../../assets/burger2.png"
import burger3 from "../../assets/burger3.png"

const CartItem = ({ value, title, img, increment, decrement }) => (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={img} alt="Item" />
      </div>
  
      <div>
        <button onClick={decrement}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={increment}>+</button>
      </div>
    </div>
  );

const Cart = () => {

    const increment = (item) => {};
    const decrement = (item) => {};
  return (
    <section className='cart'>
        <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Cheese Burger with French Fries"}
          img={burger3}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        </main>
    </section>
  )
}

export default Cart