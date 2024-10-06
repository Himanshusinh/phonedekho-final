import React from 'react'
import styled from 'styled-components';
import { imgDB } from '../config/firebase.js';

const Upcomming = () => {
  return (
    <Upcommingmain>
        <div className="phone-name">
        <a>Apple iphone 16 pro max & iphone 16 pro</a>
        <a className='under'>New Features are unlocking</a>
        </div>

        <div className="event-details">
            <a >The  <span>Exclusive</span> </a>
         
            <a >Launching event </a>
        </div>
    </Upcommingmain>
  )
}

export default Upcomming


const Upcommingmain = styled.main`
    width : 95%;
    height : 400px;
    background-image: url('https://cdn.dribbble.com/userupload/12976409/file/original-c391d9c321732af66c3c24ea67f98aa1.gif');
    background-position:center;
background-size: contain;
background-repeat: no-repeat;
    margin: 10px 0px 0px 50px;
    display :flex;

    .phone-name{
        display: flex;
        flex-direction: column;
        margin :20px 0px 0px 40px;
        gap: 10px;

        a{
            font-family: "Candal", sans-serif;
            font-size: 25px;
        }
        .under{
            font-size: 18px;
            font-weight: 100;
        }

    }

    .event-details{
        display: flex;
        flex-direction: column;
        justify-content: end;
        margin-left: 700px;
        margin-bottom: 60px;

        a{
            font-family: "Julius Sans One", sans-serif;
            font-size: 35px;
            color : #595959;

        }
        
        span{
            font-family: "Great Vibes", cursive;
        }


    }



`;