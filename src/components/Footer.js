import React from 'react'
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid purple;
  border-radius: 8px;
  background-color: pink;
`;

function Footer() {
  return (
    <div>
      <Paragraph> 
        Fredriks webbshop for sportstuff, Copyright &copy; 2022 <br />
        Sportvägen 24 A <br />
        432 52 Varberg
      </Paragraph>

    </div>
  )
}

export default Footer