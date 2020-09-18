import React, { useEffect, useState } from "react";
import {
  Container,
  DivInput,
  Scrollyng,
  ScrollyngItem,
  RestaurantList,
  RestaurantCard,
  CardHeader,
  CardHeaderImage,
  CardFooter,
  RestaurantName,
  RestaurantInfos,
  RestaurantTime,
  RestaurantShipping,
  DivMenu,
} from "./styles";
import TextField from "@material-ui/core/TextField";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { baseUrl } from "../../Components/Configs";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const [SearchRestaurant, setSearchRestaurant] = useState("");
  const [restaurants, setRestaurants] = useState([]);  
  const [filter,setFilter] = useState(null)


  // remover itens duplicados do array

  const removeDuplicates = (array, prop) => {
    return restaurants.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
    })
  }
  const newArray = removeDuplicates(restaurants, 'category')
// final do codigo 

// filtrar os itens 

useEffect(() => {

  axios.get(`${baseUrl}/restaurants`, {
    headers: {
      auth: localStorage.getItem('token')
    }
  }).then(res => {

    setRestaurants(res.data.restaurants)

  }).catch(err => {
    window.alert('Falha ao carregar restaurantes.')
  })
  removeDuplicates()
  
}, [])



  
  const goToRestaurant = (id) => {
    history.push(`/restaurant/${id}`);
  
  };

  
  
  

  return (
    <Container>
      <Header />
      <DivInput>
        <TextField
          name="SearchInput"
          fullWidth
          placeholder="Restaurante"
          onChange={(e) => setSearchRestaurant(e.target.value)}
          type="search"
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="grey" />
              </InputAdornment>
            ),
          }}
        />
      </DivInput>
      <DivMenu>

        <Scrollyng >
        <ScrollyngItem key='todos' onClick={() => setFilter(null)}>Todos</ScrollyngItem>
          {newArray.map((menu) => {
            return <ScrollyngItem key={menu.id} onClick={() => setFilter(menu.category)}>{menu.category}</ScrollyngItem>
          }
          )}
        </Scrollyng>
      </DivMenu>

      <RestaurantList>
            {restaurants.length === 0 ? <div>carregando lista...</div>  : (
          filter === null ? restaurants.map(restaurant =>{
            return ( 
            <RestaurantCard key={restaurant.id} onClick={() => goToRestaurant(restaurant.id)}>
            <CardHeader><CardHeaderImage src={restaurant.logoUrl} alt="logo restaurante" /></CardHeader>
            <CardFooter>
              <RestaurantName >{restaurant.name}</RestaurantName>
              <RestaurantInfos>
                <RestaurantTime>{restaurant.deliveryTime} min</RestaurantTime>
                <RestaurantShipping>Frete R$ {restaurant.shipping.toFixed(2)}</RestaurantShipping>
              </RestaurantInfos>
            </CardFooter>
          </RestaurantCard>

            )
          }) : restaurants.filter(arr => arr.category === filter).map(restaurant => {
            return (
              <RestaurantCard key={restaurant.id} onClick={() => goToRestaurant(restaurant.id)}>
            <CardHeader><CardHeaderImage src={restaurant.logoUrl} alt="logo restaurante" /></CardHeader>
            <CardFooter>
              <RestaurantName >{restaurant.name}</RestaurantName>
              <RestaurantInfos>
                <RestaurantTime>{restaurant.deliveryTime} min</RestaurantTime>
                <RestaurantShipping>Frete R$ {restaurant.shipping.toFixed(2)}</RestaurantShipping>
              </RestaurantInfos>
            </CardFooter>
          </RestaurantCard>

            )
          })
            )
        }
      </RestaurantList>
      <Footer ativo={0} />
    </Container>
  );
}

export default Home;
