import React from 'react';
import styled from '@emotion/styled';

const ReviewFormStyle = styled.div`
align-items:center;
> button{
    margin-left:1rem;
    background-color: rgb(0, 0,0,0.75);
    color: white;
    padding: 0.8rem 2rem;
    border: 1px solid rgb(0, 0,0,0.75);
    border-radius: 10px;
    font-size: 1.4rem;
    cursor: pointer;
}
> input{
    font-size: 1.3rem;
    padding:0.5rem 2rem;
    line-height: 1.8rem;
    border-radius:10px;
    border:1px solid #ddd;
    margin-bottom: 1rem;
    }
`;

const ReviewForm = ({inputVal,onChange,onSubmit}) =>{
    return(
        <ReviewFormStyle>
            <input type="text" value={inputVal} onChange={onChange}/>
            <button onClick={onSubmit}>Post</button>
        </ReviewFormStyle>
    )

}

export default ReviewForm;