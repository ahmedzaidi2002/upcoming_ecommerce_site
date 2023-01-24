import React from 'react'
import { motion } from "framer-motion";

// yaha kafi changes karne hai yaad rakhna lol 

const MenuCard = ({itemNum, burgerSrc, price, item, handler, delay=0}) => {
  return (
    <motion.div className='menuCard'
      initial={{x:"-100%", opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{delay}}
    >
      <div>{itemNum}</div>
      <main>
        <img src={burgerSrc} alt={itemNum} />
        <h5>₹{price}</h5>
        <p>{item}</p>
        <button onClick={()=> handler(itemNum)}>Buy Now</button>
      </main>
    </motion.div>
  )
}

export default MenuCard