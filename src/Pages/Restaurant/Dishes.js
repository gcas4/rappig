import React, { useState } from 'react';
import { ContainerDetails, Category, DishesContainer } from './style'
import DishesByCategory from './DishesByCategory'

function Dishes(props) {
    const products = props.products
    let categoryMap
    let uniqueCategories
    let togetherCategoryAndDishes

    if (products) {
        categoryMap = products.map(product => {
            return product.category
        })
        uniqueCategories = Array.from(new Set(categoryMap));
    }

    return (
        <DishesContainer>
            {!products ? <div>carregando...</div> : (
                togetherCategoryAndDishes = uniqueCategories.map(category => {

                    return (
                        <ContainerDetails>
                            <Category>{category}</Category>
                            {products.filter(product => {
                                if (product.category === category) {
                                    return (product)
                                }
                            }).map(product => {
                                return (<DishesByCategory product={product} />)
                            })}
                        </ContainerDetails>)
                })
            )}
        </DishesContainer>
    );
}

export default Dishes;