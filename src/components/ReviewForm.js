import React from 'react';
import styled from '@emotion/styled';

const ReviewFormStyle = styled.div`
    align-items:center;
    > button{
        margin-left:1rem;
    }
`;

const ReviewForm = ({inputVal,onChange,onSubmit}) =>{
    return(
        <ReviewFormStyle>
            <input type="text" value={inputVal} onChange={onChange}/>
            <button onClick={onSubmit}>Submit</button>
        </ReviewFormStyle>
    )

}

export default ReviewForm;