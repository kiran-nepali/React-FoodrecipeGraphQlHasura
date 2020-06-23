import React from 'react';
import { useQuery, gql } from '@apollo/client';
import {Badge} from './shared/Badge';

const FOOD = gql`
query MyQuery($id:uuid!) {
    FoodRecipe_by_pk(id:$id ) {
      name
      recipe1
      recipe2
      Reviews {
        body
        food_id
      }
    }
  }
`;

const Food = ({
    match:{
        params:{ id }
    }
}) => {
    const {loading,error,data} = useQuery(FOOD,{variables:{id}});
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error...</p>;

    const {name,recipe1,recipe2,Reviews} = data.FoodRecipe_by_pk;

    return (
        <div>
            <h3>
            {name}<Badge>{recipe1}|{recipe2}</Badge>
            </h3>
            <p>
                {Reviews.map((review)=>(
                    <ul key={review.id}>{review.body}</ul>
                ))}
            </p>
        </div>
    )

}

export default Food;