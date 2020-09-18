import React, { useState } from 'react';
import { Container, FixedLabel, Order, Price, OrderDetails } from './style'
import Clock from '../../img/clock.png'
import Footer from '../Footer'

function Restaurant() {

    return (
        <Container>
            <img src={Clock} alt={'Clock'} />
            <OrderDetails>
                <FixedLabel>Pedido em andamento</FixedLabel>
                <Order>Bullguer Vila Madalena</Order>
                <Price>SUBTOTAL R$67,00</Price>
            </OrderDetails>
            <Footer />
        </Container>
    );
}

export default Restaurant;