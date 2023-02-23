import React from 'react'
import { motion } from "framer-motion"
import me from "../../assets/founder.webp";

const Founder = () => {

  const options = {
    initial:{
      x:"-100%",
      opacity:0,
    },
    whileInView:{
      x:"0%",
      opacity:1,
    }
  }

  return (
    <section className='founder'>
        <motion.div {...options}>
            <img src={me} alt="Founder" height={200} width={200}/>
            <h3>Ahmed Husain Zaidi</h3>
            <p>Hey, everyone iam Ahmed Zaidi, i developed this prototype website for MBA Burger wala.

            <br />
            our aim is to provide you with the tasiest burgers.
            </p>
        </motion.div>
    </section>
  )
}

export default Founder