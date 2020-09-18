import Styled from 'styled-components'
import { ArrowBackIos } from '@material-ui/icons'
import { Modal } from '@material-ui/core';

// Restaurant/index.js

const Container = Styled.div`
max-width: 400px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
text-align: left;
margin: auto;
`
const Header = Styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
height: 44px;
border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`
const ArrowBackIosStyled = Styled(ArrowBackIos)`
padding: 0 16px;
`
const Label = Styled.label`
position: absolute;
left: 50%;
margin-right: -50%;
transform: translate(-50%, 0);
`
const Details = Styled.div`
  padding: 16px;
  display: grid;
  gap: 8px;
`
const ImgPrincipal = Styled.img`
  width: 100%;
  max-width: 400px;
  height: 120px;
  border-radius: 8px 8px 0 0;
  object-fit: contain;
`
const RestaurantName = Styled.label`
  color: #e86e5a;
`
const RestaurantCategory = Styled.label`
  color: #b8b8b8;
`
const Time = Styled.label`
  width: 104px;
  margin-right: 32px;
  color: #b8b8b8;
`
const Shipping = Styled.label`
  color: #b8b8b8;
`
const Adress = Styled.label`
  color: #b8b8b8;
`

export {
  Container, Header, ArrowBackIosStyled, Label, Details, Time,
  ImgPrincipal, RestaurantName, RestaurantCategory, Shipping, Adress
}

// Dishes.js e DishesByCategory.js

const DishesContainer = Styled.div`
  padding-bottom: 183px;
`
const ContainerDetails = Styled.div`
  padding: 16px 16px 8px;
  display: grid;
  gap: 8px;
  ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    ::-webkit-scrollbar-thumb {
        background: #b3b3b3; 
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #8c8c8c; 
    }
`
const ContainerDishes = Styled.div`
  border: 1px solid #b8b8b8;
  border-radius: 8px;
  height: 112px;
  width: 100%;
  display: flex;
`
const WriterDish = Styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 33px 1fr 1fr 30px;
  grid-template-columns: 1fr 57px 33px;
  padding-left: 16px;
`
const DishImg = Styled.img`
  height: 100%;
  width: 97px;
  border-radius: 8px 0 0 8px;
  object-fit: contain;
`
const DishName = Styled.label`
  color: #e86e5a;
  grid-column: 1/3;
  grid-row: 1/2;
  padding-top: 16px;
`
const Ingredients = Styled.label`
  color: #b8b8b8;
  grid-column: 1/4;
  grid-row: 2/4;
  padding-top: 6px;
  letter-spacing: -0.34px;
`
const Price = Styled.label`
  grid-column: 1/2;
  grid-row: 4/5;
  padding-bottom: 15px;
`
const Category = Styled.label`
  border-bottom: 1px solid;
  padding-bottom: 8px;
`
const Quantity = Styled.div`
  border-radius: 0 8px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 3/4;
  grid-row: 1/2;
`
const AddRemoveButton = Styled.div`
  font-size: 12px;
  border-radius: 8px 0;
  border: 1px solid;
  padding: 6px 21px;
`
const ButtonAdd = Styled.div`
  grid-column: 2/4;
  grid-row: 4/5;
`

export {
  ContainerDetails, ContainerDishes, WriterDish,
  DishImg, DishName, Ingredients, Price, Category,
  Quantity, AddRemoveButton, ButtonAdd, DishesContainer
}

// Modal.js

const DishQuantity = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: white;
`
const LabelDishQuantity = Styled.label`
    padding: 31px 16px 43px;
    text-align: center;
`
const Select = Styled.select`
    padding: 16px;
`
const AddToCart = Styled.div`
    color: #4a90e2;
    padding: 28px 0 5px;
    text-align: right;
`
const ModalStyled = Styled(Modal)`
    padding: 16px;
`
export { DishQuantity, LabelDishQuantity, Select, AddToCart, ModalStyled }