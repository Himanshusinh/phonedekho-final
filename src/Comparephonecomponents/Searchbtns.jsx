import React, { useState } from "react";
import styled from "styled-components";
import Overall from "./Overall";
import Phone_details from "./Phone_details";
import { db } from '../config/firebase.js';
import { getDocs , collection} from 'firebase/firestore';

const Searchbtns = () => {


  const phonenames = ["Iphone 15 Pro max", "Samsung Galaxy S24 ultra", "Iphone 15 Pro", "Samsung Galaxy Z Flip 5", "Samsung Galaxy Z Fold 5", "Xiaomi 14", "OnePlus 12", "Vivo V30 Pro", "Oppo Reno 11 Pro"]

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

  // code to onclick search 
  const [getdata1, setdata1] = useState([]);
  const [showDetails1, setshowDetails1] = useState(false);

  const [getdata2, setdata2] = useState([]);
  const [showDetails2, setshowDetails2] = useState(false);


  //search the data from firebase for 1 

  // const handleOnClickForSearch1 = () => {
  //   const fetchData1 = async () => {
  //     try {
  //       const collectionRef = collection(db, input1); // Use input1 as collection name

  //       const fetchingData = await getDocs(collectionRef);

  //       const filteredData = fetchingData.docs.map((doc) => doc.data());

  //       setdata1(filteredData);

  //       setshowDetails1(true); // Show details after fetching data
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   if (input1) {
  //     fetchData1();
  //   }
  // };

  //  //search the data from firebase for 2
  //  const handleOnClickForSearch2 = () => {
  //   const fetchData2 = async () => {
  //     try {
  //       const collectionRef = collection(db, input2); // Use input2 as collection name

  //       const fetchingData = await getDocs(collectionRef);

  //       const filteredData = fetchingData.docs.map((doc) => doc.data());

  //       setdata2(filteredData);

  //       setshowDetails2(true); // Show details after fetching data
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   if (input2) {
  //     fetchData2();
  //   }
  // };







  const handleOnClickForSearch = async () => {
    try {
      const fetchData1 = async () => {
        const collectionRef = collection(db, input1); // Use input1 as collection name
        const fetchingData = await getDocs(collectionRef);
        return fetchingData.docs.map((doc) => doc.data());
      };

      const fetchData2 = async () => {
        const collectionRef = collection(db, input2); // Use input2 as collection name
        const fetchingData = await getDocs(collectionRef);
        return fetchingData.docs.map((doc) => doc.data());
      };

      const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
      setdata1(data1);
      setdata2(data2);
      setshowDetails1(true);
      setshowDetails2(true);
    } catch (err) {
      console.error(err);
    }
  };
  


    
  

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
             onChange={handleinput1}
             placeholder="Search Phone 1" />
             
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
             onChange={handleinput2}
             placeholder="Search Phone 2" />
              
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


      <button className="searchbtn" onClick={handleOnClickForSearch}>Compare</button>

            
      
      <div className="images">
        {
          getdata1.map((data) => (
            <img className="imagesizing" src={data.image} alt="" />
          ))
        }
        {
          getdata2.map((data) => (
            <img className="imagesizing" src={data.image} alt="" />
          ))
        }
        </div>

        { showDetails1 && <Overall getdata1={getdata1} getdata2 ={getdata2}   />}
        {showDetails1 && <Phone_details getdata1={getdata1} getdata2 ={getdata2}  />}
      


        
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
      /* filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.5)); */
      
    }

     .imagesizing{
      width: 400px;
      height: 400px;
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

.searchbtn{
  display: flex;
  justify-content :center;
  align-items: center;
  background-color: #1e23bd;
  color: #fff;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  border : none;
  margin: 40px 0px 0px 690px;
  cursor: pointer;
}
`;
