import React, { useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../img/logoIntro.svg';
import {useHistory} from 'react-router-dom';

const Rectangle = styled.div`
align-items: center;
display: flex;    
flex-direction: column;
justify-content: center;
background-color: #e86e5a;
width: 100%;
height: 100vh;
transition: 800ms;
`
  
function Intro() {
  const history = useHistory()


    


useEffect(()=>{
  const timer = setTimeout(() => {
    history.push('/login')
  },3000)
  return () => clearTimeout(timer)
},[])

  return (
    <Rectangle >
        
        <img src={logo} alt={'logo'} />
        
    
    </Rectangle>
  );
}

export default Intro;