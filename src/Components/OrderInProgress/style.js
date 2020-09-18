import Styled from 'styled-components'

const Container = Styled.label`
    position: fixed;
    bottom: 49px;
    max-width: 100%;
    width: 100%;
    background-color: #e86e5a;
    display: flex;
    align-items: center;
    padding: 24px;
`
const OrderDetails = Styled.div`
    display: grid;
    gap: 8px;
    padding-left: 24px;
`
const FixedLabel = Styled.label`
    color: white;
`
const Order = Styled.label``
const Price = Styled.label`
    font-weight: bold;
`

export { Container, FixedLabel, Order, Price, OrderDetails }