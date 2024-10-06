import React from 'react'
import styled from 'styled-components'

const Loding = () => {
  return (
    <Main>
        <img src="public/images/Animation - 1715421117143.gif" alt="" />
    </Main>
  )
}

export default Loding

const Main = styled.main`
    width: 100%;
    height: 100%;
    

    img{
        display: flex;
        position: absolute;
        width: 100px;
        height: 100px;
        transform : translate(-50%, -50%);
        top: 50%;
        left: 50%;

    }
`;