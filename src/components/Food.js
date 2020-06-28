import React,{useState} from 'react';
import { useSubscription,useMutation, gql } from '@apollo/client';
import {Badge} from './shared/Badge';
import ReviewForm from './ReviewForm';

const FOOD = gql`
subscription MyQuery($id:uuid!) {
    FoodRecipe_by_pk(id:$id ) {
      name
      recipe1
      recipe2
      Reviews(order_by:{created_at:desc}) {
        body
        food_id
      }
    }
  }
`;

const ADDREVIEW = gql`
    mutation MyMutation($body:String!,$foodId:uuid!) {
        insert_Reviews(objects: {body:$body , food_id:$foodId }) {
        affected_rows
        }
    }
`;

const Food = ({
    match:{
        params:{ id }
    }
}) => {
    const [inputVal,setInputVal] = useState("");
    const {loading,error,data} = useSubscription(FOOD,{variables:{id}});
    const [addReview] = useMutation(ADDREVIEW);
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error...</p>;

    const {name,recipe1,recipe2,Reviews} = data.FoodRecipe_by_pk;

    return (
        <div className="content">
            <h3>
            {name}<Badge>{recipe1}|{recipe2}</Badge>
            </h3>
            <h3>Reviews</h3>
            <ReviewForm
            inputVal = {inputVal}
            onChange = {(e) => setInputVal(e.target.value)}
            onSubmit={()=>{
                addReview({variables:{foodId:id,body:inputVal}})
                .then(()=> setInputVal(""))
                .catch((e)=> {
                    setInputVal(e.message);
                })
            }}
            />
            <p>
                {Reviews.map((review)=>(
                    <ul >
                        <li key={review.id}>{review.body}</li>
                    </ul>
                ))}
            </p>

        </div>
    )

}

export default Food;