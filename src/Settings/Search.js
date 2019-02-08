import React from 'react';
import styled from 'styled-components';
import { backgroundColor2, fontSize2 } from '../Shared/Styles';

const SearchGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
    ${backgroundColor2}
    color: #1163c9
    ${fontSize2}
    border: 1px solid;
    height: 25px;
    align-self: center;
    justify-self: left;
`;

export default () => {
    return (
        <SearchGrid>
            <h2>Search all coins</h2>
            <SearchInput />
        </SearchGrid>
    );
}