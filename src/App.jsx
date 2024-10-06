import React, { useState } from "react";
import styled from "styled-components";
import SearchComponent from "./components/SearchComponent";
import Home from "./screens/Home";
import Compare_phone_screen from "./screens/Compare_phone_screen";
import ThreeView from "./screens/ThreeView";
import About from "./screens/About";
import Login from "./screens/Login";
import Profile from "./components/Profile";
import { auth } from './config/firebase.js';

const App = () => {
const [activescreen , setavtivescreen] = useState('home');

const [signinbtn, setsigninbtn] = useState(false);

const handleSigninbtn = () => {
  setsigninbtn(true);
  }

const currentscreen = (component) => {
  setavtivescreen(component);
}

const [profilePage , setProfilePage] = useState(false); 
const openProfile = () => {
    setProfilePage(!profilePage);
    
}
 
  return (
    <Main>
      <div className="navigation-bar">
        <div className="logo">
          <img src="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/phonedekho%20logo%201.png?alt=media&token=b4300093-6c57-45b0-8d79-bca5d7961d2c" alt="" />
          <span data-text="Phone Dekho"
           data-text-2="फ़ोन देखो"
            data-text-3="ફોન દેખો"
             data-text-4="ফোন দেখো"
              data-text-5="போன் டெகோ"></span>
        </div>

        <div className="navigation-components">
          <div className="search-bar">
            <SearchComponent />
          </div>

          <ul>
            <li onClick={() =>currentscreen('home')}>Home</li>
            <li onClick={() =>currentscreen('compare')} >Compare Phones</li>
            <li onClick={() =>currentscreen('view')}>360 View</li>
            <li onClick={() =>currentscreen('aboutus')}>About us</li>
          </ul>

          <div className="buttons">
            <button className="button seller" ><a href="https://radiant-salmiakki-a1d6d6.netlify.app">Become a Seller</a> </button>
            <button
             className="button"
             onClick={handleSigninbtn}>Sign in </button>
             {signinbtn && <Login setsigninbtn={setsigninbtn} />}
          </div>

          <div className="profile" onClick={openProfile}>
            <div className="circle">
              <img src={ auth?.currentUser?.photoURL || "https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.avif?alt=media&token=6d594281-8e82-481c-98ee-1062cd930783"} alt="" />
            </div>
          </div>
          {profilePage && <Profile />}
        </div>
      </div>

      {/* show content  */}

      <div className="show-content">
        {activescreen === 'home' && <Home currentscreen = {currentscreen} />}
        {activescreen === 'compare' && <Compare_phone_screen  />}
        {activescreen === 'view' && <ThreeView />}
        {activescreen === 'aboutus' && <About />}
      </div>

        
    </Main>
  );
};

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;

  .navigation-bar {
    width: 100vw;
    height: 130px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(#ebf3fe, #fff);

    .logo {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      gap: 20px;
      align-items: center;
    
      img {
        width: 45px;
        margin-top: 10px;

      }

  span {
    display: none; 
    transition: all 0.5s ease;
  
  }

  span::after {
    content: attr(data-text); 
    font-size: 30px;
    font-family: "Lequire DEMO";
    margin-top: 10px;
    animation: textChange 7s infinite;
  }

  &:hover {
    span {
      display: block; 
      transition: all 5s ease;

    
    }

    
  }
}

@keyframes textChange {
  0% { content: attr(data-text);   }             
  20% { content: attr(data-text-2);  }      
  40% { content: attr(data-text-3);  } 
  60% { content: attr(data-text-4);  } 
  80% { content: attr(data-text-5);  } 
}
  }

  .navigation-components {
    display: flex;
    height: 90px;
    margin-bottom: 10px;
    width: 100%;

    /* search bar  */
    .search-bar {
      

     
    }

    /* ul     */
    ul {
      display: flex;
      list-style: none;
      gap: 50px;
      margin: 6px 0px 0px 30px;
      li {
        width: 130px;
        height: 30px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        box-shadow: 0px 1px 4px #a2a2a2;
        font-family: "AzonixRegular";
        font-size: 11px;
        transition: background-position 1s ease;
        background-image: linear-gradient(
          to right,
          #5783db,
          #5783db 50%,
          transparent 50%
        );
        background-size: 200% 100%;
        background-position: -100% 0;
        cursor: pointer;
      }

      li:hover {
        background-position: 100% 0;
      }
    }
  }

  /* button */
  .buttons {
    display: flex;
    gap: 30px;
    margin: 0px 0px 0px 40px;

    .button {
      font-family: "AzonixRegular";
      font-size: 11px;
      width: 100px;
      height: 35px;
      border-radius: 20px;
      background-color: #fff;
      border-style: dotted;
      background: none;
      margin-top: 3px;
      cursor: pointer;

      a{
        text-decoration: none ;
        color: black;
      }
    }

    .seller {
      width: 140px;
    }
  }

  /* profile */
  .profile {
    display: flex;
    margin: 0px 0px 0px 30px;
    .circle {
      width: 42px;
      height: 42px;
      border-radius: 30px;
      /* background-color: #312525; */
      border : 0.3px solid black;
      cursor: pointer;

      img{
        width: 42px;
        height: 42px;
        background-position: center;
        /* background-size : cover; */
        border-radius: 30px;
      }
    }
  }

  /* show-content */
  .show-content {
    width: 100%;
    height: auto;
  }
`;
