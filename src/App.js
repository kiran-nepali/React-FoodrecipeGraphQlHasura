import React from 'react';
import './App.css';
import { ApolloProvider} from '@apollo/client';
import {ApolloClient,HttpLink,InMemoryCache } from '@apollo/client';
import FoodSearch from './components/FoodSearch';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Food from "./components/Food";
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
    <BrowserRouter>
      <ApolloProvider client ={client}>
        <div className="App">
          Food Recipe
          <Switch>
            <Route path="/foodrecipe/:id" component={Food} />
            <Route path="/" component={FoodSearch} />
          </Switch>
        </div>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
