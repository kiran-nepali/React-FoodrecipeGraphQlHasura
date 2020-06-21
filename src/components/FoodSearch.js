import React, { useState } from 'react';
import FoodRecipe from './FoodRecipe';
import SearchForm from './SearchForm';
import { useLazyQuery, gql } from "@apollo/client";

const SEARCHQRY = gql`
query Search($match:String) {
    FoodRecipe(order_by: {name: asc}, where: {name: {_ilike: $match}}) {
      name
      id
      recipe1
      recipe2
    }
  }
`;

const FoodSearch = () =>{
    const [inputval,setInputval] = useState("");
    const [search,{loading,error,data}] = useLazyQuery(SEARCHQRY);
    return(
        <>
            <SearchForm
                inputval = {inputval}
                onChange = {(e) => setInputval(e.target.value)}
                onSearch = {() => search({variables:{match:`%${inputval}%`}})}
            />
            <FoodRecipe
                newFoodSearch = {data ? data.FoodRecipe: null}
            />
        </>
    )
}

export default FoodSearch;