import React from 'react'
import styled from 'styled-components'

const Compare_phone_compo = ({currentscreen}) => {
  return (
    <Main>
        <div className="textarea">
          <span className='compare'>Compare </span>
          <span className='phone'>Phone</span>

          <button onClick={() => currentscreen('compare') } >Click Here</button>
          <div className="blue-color"></div>
        </div>


        <div className="phone-photo">
          <img src="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/iphone_14_PNG6%202.png?alt=media&token=8a05fc97-bfac-4e09-b124-3acddf6c3276" alt="" className='iphone' />
          <span>VS</span>
          <img src="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/Samsung-S22-Ultra-Png-1024x724%201.png?alt=media&token=4f3b4f33-b226-4493-a255-6e5f4e16162d" alt="" className='samsung' />
        </div>
    </Main>
  )
}

export default Compare_phone_compo

const Main = styled.main`
  width: 90%;
  max-height: 350px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 1px 1px 10px #cfcfcf;
  display :flex;


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

    .blue-color{
      z-index: 1;
      width: 150px;
      height: 150px;
      background-image: radial-gradient(#75F7FF ,#91f9fe ,#bff8fb,#d6fafb,#eaf9fa,#f7ffff,#ffffff  );
      border-radius: 0% 100% 49% 51% / 80% 47% 53% 20% ;
   
      margin-top: -30px;
      margin-left: -40px;
      
      
    }
  }


  .phone-photo{
    margin: 10px 0px 0px 10px;
    display: flex;

    .iphone{
      width: 350px;
      height: 402px;
      margin-top: -100px;
      margin-bottom: 70px;

    }
    .samsung{
      width: 450px;
      height: 390px;
      margin-top: -100px;
     
    }

    span{
      font-family: "Carter One", system-ui;
      font-size: 50px;
      background: linear-gradient(to right, #ff0000, #17A6E3);
    -webkit-background-clip: text; 
    background-clip: text;
    color: transparent;
     
    }
  }



`;