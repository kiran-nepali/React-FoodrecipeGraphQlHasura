import React from 'react';
import { useQuery,gql } from '@apollo/client';
import {Badge} from "./shared/Badge";

const RECIPE = gql`
{
    FoodRecipe {
      id
      name
      recipe1
      recipe2
    }
  }`;

export default function FoodRecipe({newFoodSearch}){
    const { loading,error,data } = useQuery(RECIPE);

    const renderFood = (food) => {
      return food.map(({id,name,recipe1,recipe2}) =>(
      <div key={id}>
            <p>
                {name} | <Badge>{recipe1} | {recipe2}</Badge>
            </p>
        </div>
        ));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return renderFood(newFoodSearch || data.FoodRecipe);
    // FoodRecipe is json response in heroku
  //  return (
  //       <>
  //       {data.FoodRecipe.map(({id,name,recipe1,recipe2}) =>(
  //       <div key={id}>
  //           <p>
  //               {name} | <Badge>{recipe1} | {recipe2}</Badge>
  //           </p>
  //       </div>
  //       ))} 
  //       </>)
}