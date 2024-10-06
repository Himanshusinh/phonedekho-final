import React from "react";
import styled from "styled-components";

const Phonebox = ({image , name , price ,link}) => {

  return (

    <Main>
       
      <div className="top">
        <img src={image} alt="" />
      </div>

      <div className="bottom">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <a href={link} target="_blank"><button>Explore</button></a>
      </div>
     
    </Main>

  );
};

export default Phonebox;

const Main = styled.main`
  min-width: 310px;
  min-height: 350px;
  border-radius: 20px;
  margin: 15px 0px 0px 15px;
  box-shadow: 1px 1px 10px #c5c5c5;

  .top {
    background: linear-gradient(#fff, #e7e7e7);
    width: 100%;
    height: 50%;
    border-radius: 20px 20px 0px 0px;

    img {
      margin: 40px 0px 0px 70px;
      width: 140px;
      height: 140px;
      
    }
  }

  .bottom {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1px 0px 0px 60px;
    font-family: "Bahnschrift";
  

    span {
      font-size: 18px;
      margin-top: 30px;
      
    }

    .name{
        font-size: 20px;
        margin: 0px 0px 0px 20px;
    }

    .price {
      margin: 2px 0px 0px 30px;
      margin: 0px 0px 0px 40px;
    }
    button{
      width: 100px;
      height: 40px;
      border-radius: 10px;
      outline: none;
      border : none;
      background-color: black;
      color: #fff;
      margin: 0px 0px 0px 30px;
      cursor: pointer;

      a{
        text-decoration: none;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;
