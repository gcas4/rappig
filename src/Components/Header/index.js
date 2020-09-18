import React from 'react'
import styled from 'styled-components' 


export const DivTitle = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 16px;
  width: 360px;
  height: 64px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: var(--white);

`
export const Title = styled.h1`
  width: 48px;
  height: 19px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);

`

export default function index() {
    return (
        <div>
        <DivTitle>
            <Title>Rappi4</Title>
        </DivTitle>
        </div>
    )
}