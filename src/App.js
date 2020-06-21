import React from 'react';
import './App.css';
import { ApolloProvider} from '@apollo/client';
import {ApolloClient,HttpLink,InMemoryCache } from '@apollo/client';
import FoodSearch from './components/FoodSearch';
// import FoodRecipe from "./components/FoodRecipe";
// import SearchForm  from  "./components/SearchForm";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:"https://item-adder.herokuapp.com/v1/graphql"
  })
});


function App() {
  return (
    <ApolloProvider client ={client}>
      <div className="App">
        Food Recipe
        <FoodSearch />
      </div>
    </ApolloProvider>
  );
}

export default App;
