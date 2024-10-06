import React from 'react'
import styled from 'styled-components'

const ThreeView = () => {
  return (
    <Main>
      <a href="https://vocal-hotteok-72de74.netlify.app"><button>click here for 360 View </button></a>
    </Main>
  )
}

export default ThreeView


const Main = styled.main`
  width: 100vw;
  height: 100vh;
  height: auto;
  display: flex;
  justify-content :center;
  align-items: center;

  button{
    width : 300px;
    height: 40px;
    border-radius: 20px;
    background-color: black;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;

  }
`;
