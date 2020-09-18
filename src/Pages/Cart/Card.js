import React, { useContext } from "react";
import {
  ContainerDetails,
  ContainerDishes,
  Img,
  WriterDishe,
  DisheName,
  Ingredients,
  Price,
  Quantity,
  AddRemoveButton,
} from "./styled";
import CartContext from "../../contexts/CartContext";

function Card(props) {
  const cartContext = useContext(CartContext);

  const handleRemoveItemFromCart = (productId) => {
    cartContext.dispatch({ type: "REMOVE_ITEM_FROM_CART", productId });
  };
  return (
    <ContainerDetails>
      {cartContext.cart.map((product) => {
        return (
          <ContainerDishes key={product.id}>
            <Img src={product.photoUrl} alt={"Prato"} />
            <WriterDishe>
              <DisheName>{product.name}</DisheName>
              <Ingredients>{product.description}</Ingredients>
              <Price>R$ {product.price.toFixed(2)}</Price>
            <Quantity>{product.quantity}</Quantity>
              <AddRemoveButton
                variant="outlined"
                color="primary"
                onClick={() => handleRemoveItemFromCart(product.id)}
              >
                remover
              </AddRemoveButton>
            </WriterDishe>
          </ContainerDishes>
        );
      })}
    </ContainerDetails>
  );
}

export default Card;
