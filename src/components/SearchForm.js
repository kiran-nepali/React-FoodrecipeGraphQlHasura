import React from 'react';
import styled from '@emotion/styled';

const SearchFormStyle = styled.div`
    align-items:center;
    > button{
        margin-left:1rem;
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