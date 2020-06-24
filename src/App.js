import React from 'react';
import './App.css';
import { ApolloProvider} from '@apollo/client';
import {ApolloClient,HttpLink,InMemoryCache,split } from '@apollo/client';
import FoodSearch from './components/FoodSearch';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Food from "./components/Food";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/link-ws";
// import FoodRecipe from "./components/FoodRecipe";
// import SearchForm  from  "./components/SearchForm";

const GRAPHQL_ENDPOINT = "item-adder.herokuapp.com/v1/graphql";

const httpLink = new HttpLink({
  uri:`https://${GRAPHQL_ENDPOINT}`
});



const wsLink = new WebSocketLink({
  uri:`ws://${GRAPHQL_ENDPOINT}`,
  options:{
    reconnect:true
  }
});

const splitLink = split(
  ({query}) => {
    const definition = getMainDefinition(query);
    return(
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink
  })

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
