import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

const Slogan = styled.h2`
font-size: 1em;
text-align: center;
color: red;
font-weight: bold;
`;


function Header() {
  return (
    <div> 
       
       <Title> Fredriks webbshop for sport stuff  </Title>
       <Slogan> New special offers - shop till you drop! </Slogan>
       <Link to="./sportstuff.php">Products</Link>
    </div>
  )
}

export default Header