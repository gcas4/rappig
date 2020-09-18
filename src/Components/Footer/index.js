import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import HomeIcon from '../../Images/home-icon.svg'
import HomeIconSelected from '../../Images/homeiconSelected.svg'
import CardIcon from '../../Images/card-icon.svg'
import CardIconSelected from '../../Images/cardiconSelected.svg'
import ProfileIcon from '../../Images/profile.svg'
import ProfileIconSelected from '../../Images/profileSelected.svg'


const Container = styled.div`
display:flex;
justify-content:center;
`
const DivFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display:flex;
  justify-content: space-around;
  align-items:center;
  width: 100%;
  max-width: 100%;
  height: 49px;
  background-color: white;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 
    0 -2px 1px -1px rgba(0, 0, 0, 0.12), 
    0 -1px 1px 0 rgba(0, 0, 0, 0.14);
`


export default function index(props) {

  const estado = props.ativo


  



  return (
    <Container>
      <DivFooter>    
        <Link to={'/home'}>
        <img  src={ estado === 0 ? HomeIconSelected : HomeIcon} alt="Home" />
        </Link>
        <Link to={'/cart'}>
        <img  src={ estado === 1 ? CardIconSelected : CardIcon}  alt="Seu carrinho" />
        </Link>
        <Link to={'/perfil'}>
        <img  src={ estado === 2 ? ProfileIconSelected : ProfileIcon} alt="Seu perfil" />
        </Link>


      </DivFooter>
    </Container>
  )
}