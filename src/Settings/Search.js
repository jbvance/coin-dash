import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { backgroundColor2, fontSize2 } from '../Shared/Styles';
import _ from 'lodash';
import fuzzy from 'fuzzy';

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

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
   
    //First, get all the coin symbols
    let coinSymbols = Object.keys(coinList);    
    // Get all the coin names, and map the symbol to name
    let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
    // combine the arrays for searching
    let allStringsToSearch = coinSymbols.concat(coinNames); 
    console.log('sym', coinSymbols);  
    let fuzzyResults = fuzzy
        .filter(inputValue, allStringsToSearch, {})
        .map(result => result.string);    
    let filteredCoins = _.pickBy(coinList, (result, symKey) => {
        let coinName = result.CoinName;        
        return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName))
    });       
    setFilteredCoins(filteredCoins);
}, 500);

const filterCoins = (e, setFilteredCoins, coinList) => {
    let inputValue =e.target.value;
    if (!inputValue) {
        setFilteredCoins(null);
    }
    handleFilter(inputValue, coinList, setFilteredCoins);
    
};

export default () => {
    return (
        <AppContext.Consumer>
            {({setFilteredCoins, coinList}) => 
                <SearchGrid>
                    <h2>Search all coins</h2>
                    <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)} />
                </SearchGrid>
            }   
        </AppContext.Consumer>
    );
}