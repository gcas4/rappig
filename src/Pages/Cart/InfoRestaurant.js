import React from "react";
import {
  InfoContainer,
  RestaurantName,
  RestaurantAdress,
  Time
} from "./styled";
function InfoRestaurant() {
  return (
        <InfoContainer>
          <RestaurantName>Bullguer Vila Madalen</RestaurantName>
          <RestaurantAdress>
            R. Fradique Coutinho, 1136 - Vila Madalena
          </RestaurantAdress>
          <Time>30 - 40 min</Time>
        </InfoContainer>
  );
}

export default InfoRestaurant;