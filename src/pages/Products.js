import React, {useState, useEffect} from 'react'
import ProductItem from '../components/ProductItem';
import {motion} from "framer-motion"


function Products() {
    const [puns, setPuns] = useState([]);

    const fetchPuns = async () => {
        try {
            const response = await fetch('https://codexplained.se/sportstuff.php')
            const data = await response.json();
            console.log(data);

            setPuns(data);
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPuns();
    }, [] )


    return (
        <div>
            
<motion.h2 animate={{  scale:1.5 }} transition={{ ease: "easeOut", duration: 3 }}>
    General information about our products
</motion.h2>
          
            <section>
                {                                                                                     
                 puns.map(pun => <ProductItem key={pun.id} pun={pun} />)                                     
                }
            </section>
                                         
        </div>
    )
}

export default Products