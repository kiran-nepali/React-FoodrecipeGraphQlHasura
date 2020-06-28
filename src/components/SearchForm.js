import React from 'react';
import styled from '@emotion/styled';

const SearchFormStyle = styled.div`
    align-items:center;
    > button{
        margin-left:1rem;
        background-color: rgb(0, 0,0,0.75);
        color: white;
        padding: 1rem 2rem;
        border: 1px solid rgb(0, 0,0,0.75);
        border-radius: 10px;
        font-size: 1.4rem;
        cursor: pointer;
    }
    > input{font-size: 1.3rem;
    padding:0.5rem 2rem;
    line-height: 2.8rem;
    border-radius:10px;
    border:1px solid #ddd;
    margin-bottom: 1rem;
    }
`;

const SearchForm =({inputVal,onChange,onSearch}) =>{
    return(
        <SearchFormStyle>
            <input value={inputVal} onChange={onChange} type="text"></input>
            <button onClick={onSearch}>Search</button>
        </SearchFormStyle>
    );
}

export default SearchForm;