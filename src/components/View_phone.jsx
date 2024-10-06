import React, { useState } from 'react'
import styled from 'styled-components';



const View_phone = ({currentscreen}) => {
  return  (
    <Main>
        <div className="textarea">
          <span className='compare'>360 </span>
          <span className='phone'>View</span>

          <button onClick={() => currentscreen('view')}>Click Here</button>
          <div className="blue-color"></div>
        </div>

        <div className="phone-image">
            
        </div>

        
    </Main>
  )
}

export default View_phone

const Main = styled.main`

    width: 90%;
  min-height: 350px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 1px 1px 10px #cfcfcf;
  display :flex;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/Z%201.png?alt=media&token=4d95dbb2-0cf7-4038-9871-d0a038942e9c');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  
  
  
 
  

.textarea{
    margin: 130px 0px 0px 100px;
    display :flex;
    flex-direction: column;
    gap: 10px;


    .compare{
      font-size: 45px;
      font-family: "AzonixRegular";
    }

    .phone{
      font-size: 35px;
      font-family: "AzonixRegular";
      color: #18ACFF;
    }

    button{
      font-size: 20px;
      font-family: "AzonixRegular";
      border-radius: 32px 54px 39px 0px;
      width: 168px;
      height: 50px;
      border: none;
      outline: none;
      z-index: 2;
      cursor: pointer;
    }

 


  }


  .phone-image{
    img{
        width: 1000px;
        height: 350px;
        margin-left: -200px;

    }
  }

`;