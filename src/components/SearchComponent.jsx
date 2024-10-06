// SearchComponent.js
import React, { useState } from 'react';
import suggestionsData from '../jsondata/suggestions.json';
import styled from 'styled-components';

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  // Function to handle input change and filter suggestions
  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);
    const filteredSuggestions = suggestionsData.suggestions.filter(suggestion =>
      suggestion.text.toLowerCase().includes(inputText.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    setSelectedSuggestion(null); 
  };

 
  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setSearchText(suggestion.text); // Set selected suggestion in the input field
    setSuggestions([]); // Clear suggestions
  };

  // Function to handle search button click and open the link
  const handleSearch = () => {
    if (selectedSuggestion) {
      window.open(selectedSuggestion.link, '_blank');
    } else {
      alert('Please select a suggestion first!');
    }
  };

  return (
    <Main>

    <div className="input-search">
      <input 
        type="text" 
        placeholder="Enter your search" 
        value={searchText} 
        onChange={handleInputChange} 
      />
      <img className='searchbutton' src='https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/svgs%2Fsearch.svg?alt=media&token=1cda2640-caad-4aec-8c5c-31923bcd75e2' onClick={handleSearch} />
      </div>
      <div className='suggestions'>
        {/* Display suggestions */}
        {suggestions.map((suggestion, index) => (
          <div
            key={index} 
            onClick={() => handleSuggestionClick(suggestion)}
            style={{ cursor: 'pointer', padding: '5px 0' , border: '1px solid black', padding : '5px' }}
          >
            {suggestion.text}
          </div>
        ))}
      </div>

    </Main>
  );
};

export default SearchComponent;

const Main = styled.main`

    width: 340px;
      height: 40px;
      display: flex;
      margin-left: 30px;
      border-radius: 20px;
      box-shadow: 0px 1px 4px #a2a2a2;
      background-color: #fff;
    display : flex;
    flex-direction: column;
    z-index :1;
    


.input-search{
    display :flex;
    input{
        width: 300px;
        font-family: "AzonixRegular";
        font-size: 12px;
        border: 0px;
        outline: none;
        min-width: 300px;
        height: 38px;
        margin-left: 10px;
        
    }
    img{
        width: 20px;
        cursor : pointer;

    }
}



.suggestions{
    display: flex;
    flex-direction: column;
    font-family: "Poppins", sans-serif;
    z-index: 2;
    background-color: #fff;
    
}




`;
