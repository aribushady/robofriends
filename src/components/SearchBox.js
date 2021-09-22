import React from 'react';

const SearchBox = ({searchField, searchCannge}) => {
    return (
        <div>
        <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots'
            onChange={searchCannge}
            />
        </div>
    );
}
export default SearchBox;