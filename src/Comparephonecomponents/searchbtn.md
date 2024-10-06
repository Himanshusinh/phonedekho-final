import React, { useState } from "react";
import styled from "styled-components";
import Overall from "./Overall";
import Phone_details from "./Phone_details";




const Searchbtns = () => {


  const phonenames = ["Iphone 15 Pro max", "Samsung S24 ultra", "Oppo F19 pro", "Samsung S23 Ultra", "Samsung A32", "Samsung M14"]

  //for input 1 search 1 
  const [input1 , setinput1] = useState("");
  const [showsuggestions1 , setshowsuggestions1 ] = useState(false);
  const [suggestions1, setsuggestions1] = useState([]);

  //for input 2 search 2
  const [input2, setinput2] = useState("");
  const [showsuggestions2, setshowsuggestions2] =useState(false);
  const [suggestions2, setsuggestions2] = useState([]);


  //search suggestion 1
  const handleinput1 = (e) => {
    const userInput  = e.target.value;
    setinput1(userInput);

    if(userInput.length > 1){
      setshowsuggestions1(true);
      const filtersuggestion = phonenames.filter((suggestion) => suggestion.toLowerCase().includes(userInput.toLowerCase()));
      setsuggestions1(filtersuggestion);
    }else{
      setshowsuggestions1(false);
      setsuggestions1([]);
    }
  };

  const handleSuggestionClick1 = (s) => {
    setinput1(s);
    setshowsuggestions1(false);
  }

  //search suggestion 2 
  const handleinput2 = (e) => {
    const userInput  = e.target.value;
    setinput2(userInput);

    if(userInput.length > 1){
      setshowsuggestions2(true);
      const filtersuggestion = phonenames.filter((suggestion) => suggestion.toLowerCase().includes(userInput.toLowerCase()));
      setsuggestions2(filtersuggestion);
    }else{
      setshowsuggestions2(false);
      setsuggestions2([]);
    }
  };

  const handleSuggestionClick2 = (s) => {
    setinput2(s);
    setshowsuggestions2(false);
  }
    
  

  return (
    <Main>
      <div className="search-area">
        <span className="compare">COMPARE PHONE</span>
        <div className="search-real-area">
          <div className="search1 search">
            <div className="input-1">
            <input
             type="text"
             value={input1}
             onChange={handleinput1} />

            </div>
            <div className="suggestion-area">
            {
              showsuggestions1 && (
                <div className="dropdownlist">
                  {suggestions1.map((suggest,index) => (
                    <div className="suggestion-box" key={index} onClick={() => handleSuggestionClick1(suggest)}>
                        <ul>
                          <li>{suggest}</li>
                        </ul>
                    </div>
                  ))}
                </div>
              )
             }
             </div>

          </div>
          <span>vs</span>
          <div className="search2 search">
            <div className="input1">
          <input
             type="text"
             value={input2}
             onChange={handleinput2} />
            
            </div>
            <div className="suggestion-area">
            {
              showsuggestions2 && (
                <div className="dropdownlist">
                  {suggestions2.map((suggest,index) => (
                    <div className="suggestion-box" key={index} onClick={() => handleSuggestionClick2(suggest)}>
                        <ul>
                          <li>{suggest}</li>
                        </ul>
                    </div>
                  ))}
                </div>
              )
             }
             </div>
          </div>
        </div>
      </div>

              <div className="search-btn">
                <button>Search</button>
              </div>

      <div className="images">
            <img src="" alt="" />
            <img src="public/images/animatedphones/002.png" alt="" />
        </div>

        <Overall  />
        <Phone_details />
    </Main>
  );
}


export default Searchbtns;

const Main = styled.main`

  background: linear-gradient(#fff 80% , #dfdfdf);
  width: 100%;
  height: 500px;
  .compare {
    display: flex;
    justify-content: center;
    font-family: "Monoton", sans-serif;
    font-size: 50px;
    word-spacing: 30px;
  }

  .search-area {
    display: flex;
    flex-direction: column;
  }

  .search-real-area {
    display: flex;
    justify-content: center;
    margin: 50px 0px 0px 0px;
    gap: 80px;

    span{
        font-family: "Monoton", sans-serif;
        font-size: 20px;
    }
  }

  .search{
    display : flex;
    flex-direction: column;
    
    width: 350px;
    height: 40px;
    border: none;
    border-radius: 20px;
    box-shadow: 1px 1px 10px #c6c6c6;
    input {
      width: 310px;
      height: 40px;
      border: none;
      outline: none;
      border-radius: 20px 0px 0px 20px;
    font-size: 15px;
    margin-left: 10px;
      font-family: "Poppins", sans-serif;;

    }

    .dropdownlist{
      display: flex;
      flex-direction: column;
    }
    img {
      width: 20px;
      
      
    }
      
    ul{
      border :1px solid black;
      padding : 2px;
     
     
      li{
        list-style: none;
        padding: 2px;
        
      
      }
    }

    

   
  }

  .images{
    display: flex;
    gap: 250px;
    margin: 80px 0px 0px 250px;

    img{
      filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.5));
    
    }

}

.search-btn{
  display: flex;
  justify-content: center;
  margin: 20px 0px 100px 0px;
  
  button{
    padding: 10px;
    background-color: #6363ed;
    border: none;
    border-radius: 10px;
    color: #fff;
    width: 110px;
    font-size: 14px;
    cursor: pointer;

  }
}
`;
