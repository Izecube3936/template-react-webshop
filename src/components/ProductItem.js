import React from 'react'
import {Link} from 'react-router-dom';

function ProductItem({pun}) {
  return (
    <div>
    <img src={pun.url} width="220xp" height="220px" ></img> <br></br>
     <b> Product: </b> {pun.title} <p></p>
     <b> Price: </b> {pun.price}                                                                                         
    <Link to={`/sportstuff.php/${pun.id}`}> <p>{'Read more about this product'} </p> </Link>     
                                                  
    </div>
    
  )
}

export default ProductItem
