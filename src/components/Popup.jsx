import React from "react";
import styled from "styled-components";

const Popup = ({ text }) => {
  return (
    <Main>
      <img src="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/Animation%20-%201715414805087%20(1).gif?alt=media&token=842fad7c-d717-48f6-a767-d3cc441fd9cd" alt="" />
      <a>{text}</a>
    </Main>
  );
};

export default Popup;

const Main = styled.main`

  width: 550px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items : center;
  box-shadow: 1px 1px 10px #989898;
  z-index: 4;
    position: absolute;
    top : 50%;
    left: 50%;
    transform : translate(-50%, -50%);
    background-color: #fff;
    border-radius: 30px;


  a {
    font-size: 33px;
    margin: 0px 0px 0px 0px;
    font-family: "Ubuntu Sans", sans-serif;
  }

  img {
    width: 150px;
    height: 150px;
  }
`;
