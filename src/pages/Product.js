import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import {motion} from "framer-motion"



function Product() {
  const params = useParams();
  console.log(params);
  
  const [pun, setPun] = useState([]);
  
  const fetchPun = async () => {
      try {
          const response = await fetch('https://codexplained.se/sportstuff.php?id='+ params.id)
          const data = await response.json();
          console.log(data)
         
          setPun(data);
      } catch(error) {
          console.log(error)
      }
  }

  useEffect(() => {
      fetchPun();
  },[] ) 

  return (
      <div>
         <motion.h2 animate={{  scale:1.5 }} transition={{ ease: "easeOut", duration: 3 }}> 
            Detailed information about our products
        </motion.h2>
        
          <img src={pun.url} width="220xp" height="220px" /> <br></br> 
          <b> Product:</b> {pun.title} <p></p>
          <b> Price: </b> {pun.price}  <p></p>
          <b> Description: </b> {pun.description}  <p></p>
          <b> Storage: </b>  {pun.storage} 
                   
      </div>
  )

}

export default Product

