import React, { useState } from "react";
import styled from "styled-components";
import { auth, provider , db } from "../config/firebase.js";
import { collection, addDoc } from 'firebase/firestore';
import { signInWithPopup } from "firebase/auth";
import Popup from "../components/Popup.jsx";
import Profile from "../components/Profile.jsx";

const Register = ({ setLoginScreen }) => {
  const [registerScreen, setRegisterScreen] = useState(true);
  const [popup, setpopup] = useState(false);

  const registerclosebtn = () => {
    setRegisterScreen(false);
  };

  const gotologinscreen = () => {
    setRegisterScreen(false);
    setLoginScreen(true);
  };


  const RegisterwithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      setpopup(true)
      setTimeout(() => {
        setpopup(false);
        setRegisterScreen(false);
        window.location.reload();
      }, 4000)

     
    
    } catch (err) {
      console.error(err);
    }
  };

  // Store data in database 
  const [username , setusername] = useState('');
  const [email , setemail] = useState('');
  const [password , setpassword] = useState('');

  const configtoadd = collection(db, "UserLoginData");

  const handlesignupbtn  = async () => {
    try{
       await addDoc(configtoadd, {
        username : username,
        email : email ,
        password : password
      })
      setpopup(true);
      setTimeout(() => {
        setRegisterScreen(false);
        window.location.reload();
      }, 4000);
     
    }catch(err){
      console.error(err);
    }

  }

  
  

  return registerScreen ? (
    <Main>
      <div className="left">
        <img
          src="https://cdn.dribbble.com/userupload/12976413/file/original-c3594b26973cd93cb64ce6df84e0d84d.gif"
          alt=""
        />
      </div>

      <div className="right">
        <div className="logo">
          <div className="cross">
            <img src="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/svgs%2Fblackcancel.svg?alt=media&token=0da4b249-069f-4172-902c-58391c897c6e" onClick={registerclosebtn} />
          </div>
          <div className="logopart">
            <img src="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/phonedekho%20logo%201.png?alt=media&token=b4300093-6c57-45b0-8d79-bca5d7961d2c" alt="" />
            <a>Phone Dekho </a>
          </div>
        </div>
        <a className="logintxt">Create Account</a>
        <div className="google" onClick={RegisterwithGoogle}>
          <img src="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/svgs%2Fgoogle.svg?alt=media&token=7ed33fb8-049c-40b5-b84c-71ce90fad014" alt="" />
          <span>Register with google</span>
        </div>

        <div className="or">
          <a>----OR----</a>
        </div>

        <div className="form">
          <input type="text" placeholder="username" onChange={(e) => setusername(e.target.value)} required  />
          <input type="email" placeholder="E-mail" onChange={(e) => setemail(e.target.value)} required />
          <input type="password" placeholder="create password" onChange={(e) => setpassword(e.target.value)} required />
          <button className="login" onClick={handlesignupbtn} type="submit">signup</button>
          <div className="donot">
            <a>Already have account? </a>
            <button className="register" onClick={gotologinscreen}>
              Login
            </button>
          </div>
        </div>
      </div>

      {popup && <Popup text='Registered Successfully' />}
    
    </Main>
  ) : (
    ""
  );
};

export default Register;

const Main = styled.main`
  z-index : 3;
  width: 1000px;
  height: 600px;
  background-color: #ffffff;
  color: #000;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 26px;
  box-shadow: 1px 1px 50px #a8a8a8;

  .left {
    width: 500px;
    height: 600px;

    img {
      width: 500px;
      height: 400px;
      border-radius: 26px;
      margin-top: 100px;
    }
  }

  .right {
    width: 500px;
    height: 600px;

    .logo {
      display: flex;
      flex-direction: column;

      .logopart {
        margin: -20px 0px 0px -20px;
        display: flex;
        gap: 20px;
        align-items: center;
        margin-left: -220px;

        img {
          width: 40px;
          margin: 10px 0px 0px 10px;
        }
        a {
          font-family: "Poppins", sans-serif;
          font-weight: 600;
          font-size: 18px;
          margin-left: -10px;
        }
      }
      .cross {
        margin: 0px 0px 0px 450px;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }

    .logintxt {
      font-family: "Poppins", sans-serif;
      font-size: 30px;
      margin: 0px 0px 0px 140px;
      font-weight: 800;
    }

    .google {
      width: 200px;
      height: 35px;
      display: flex;
      align-items: center;
      border: 1px solid black;
      gap: 8px;
      margin: 20px 0px 30px 150px;
      padding: 3px 13px 3px 13px;
      background-color: #ffffff;
      border-radius: 10px;
      cursor: pointer;
      img {
        width: 20px;
      }
      span {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
      }
    }

    .or {
      display: flex;
      justify-content: center;
      a {
        font-family: "Poppins", sans-serif;
        font-size: 12px;
      }
    }

    .form{
      display: flex;
      flex-direction: column;

      input{
        width: 300px;
        height: 30px;
        margin: 30px 0px 0px 100px;
        border: none;
        outline: none;
        border-bottom: 1px solid black;
        font-family: "Poppins", sans-serif;
      }

      .login{
        width: 300px;
        height: 35px;
        background-color: black;
        color: #fff;
        margin: 30px 0px 0px 100px;
        font-family: "Poppins", sans-serif;
        border: none;
        outline: none;
        border-radius: 4px;
        cursor: pointer;
      }

      .donot {
        font-family: "Poppins", sans-serif;
        display: flex;
        margin: 30px 0px 0px 100px;
      }

      .register {
        margin: 0px 0px 0px 20px;
        width: 100px;
        height: 27px;
        border-radius: 15px;
        outline: none;
        border: 0.3px solid #383838;
        padding: 5px;
        background-color: #fff;
        cursor: pointer;
      }
    }
  }
`;
