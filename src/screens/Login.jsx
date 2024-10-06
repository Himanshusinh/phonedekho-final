import React, { useState } from 'react'
import styled from 'styled-components'
import Register from '../screens/Register'
import { auth, provider, db } from '../config/firebase.js'
import { collection , getDocs} from 'firebase/firestore'
import { signInWithPopup } from 'firebase/auth'
import Popup from '../components/Popup.jsx'
import Home from '../screens/Home.jsx'

const Login = ({setsigninbtn,}) => {

    const [registerScreen , setRegisterscreen] = useState(false);
    const [loginScreen , setLoginScreen] = useState(true);
    const [popup , setpopup]=  useState(false);
    const [homescreen , sethomescreen] = useState(false);

   const handleCrossBtn = () => {
    setsigninbtn(false);
   }

   const gotoRegisterbtn = () => {
        setRegisterscreen(true);
        setLoginScreen(false);
   }

   const authWithGoogle = async () => {
        try{
            await signInWithPopup(auth, provider);
            setpopup(true);
            setTimeout(() => {
                setpopup(false);
                setLoginScreen(false);
                window.location.reload();
            }, 4000);
        }catch(err){
            console.error(err);
        }

   }


   // Fetching data from data base 
   const [email , setemail] = useState('') 
   const [password , setpassword] = useState('') ;

   const handleloginbtn = async () => {
        try{
        const configdata = collection(db , "UserLoginData");
        const getdata  = await getDocs(configdata);

        const filterdata = getdata.docs.map((doc) => doc.data());

        const user = filterdata.find((user) => user.email === email && user.password === password);
        if(user){
            setpopup(true);
            setTimeout(() => {
                setLoginScreen(false);
                sethomescreen(true);
                window.location.reload();
            }, 4000);
        }else{
           alert("Wrong Id or Password");
        }
    }catch(err){
        console.error(err);
    }
   }
   
  return (loginScreen) ? (
    <Main>
        <div className="left">
            <div className="logo">
                <img src="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/phonedekho%20logo%201.png?alt=media&token=b4300093-6c57-45b0-8d79-bca5d7961d2c" alt="" />
                <a>Phone Dekho </a>
            </div>
            <a className='logintxt'>Login to your Account</a>
            <div className="google" onClick={authWithGoogle}>
                <img src="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/svgs%2Fgoogle.svg?alt=media&token=7ed33fb8-049c-40b5-b84c-71ce90fad014" alt="" />
                <span>Login in with google</span>
            </div>

            <div className="or">
                <a>----OR----</a>
            </div>

            <div className='form'>
                <input
                  type="email" placeholder='e-mail' onChange={(e) => setemail(e.target.value)} required />
               

                <input type="password" placeholder='Password' onChange={(e) => setpassword(e.target.value)} required />
              
                <button className='login' onClick={handleloginbtn}>Login</button>
                <div className="donot">
                <a>Do not have account? </a>
                <button
                 className='register'
                 onClick={gotoRegisterbtn}
                 >Register</button>
                </div>
            </div>



           
        </div>
        <div className="right">
            
            <div className="cross">
                <img
                 src="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/svgs%2Fblackcancel.svg?alt=media&token=0da4b249-069f-4172-902c-58391c897c6e" alt=""
                 onClick={handleCrossBtn}
                  />
            </div>
            <img  src="https://cdn.dribbble.com/userupload/12976413/file/original-c3594b26973cd93cb64ce6df84e0d84d.gif" alt="" />
        </div>

        {popup && <Popup text = 'Login successfully ' />}
        {homescreen && <Home />}
    </Main>
  ) : registerScreen && <Register setLoginScreen={setLoginScreen} /> ;
}

export default Login



const Main = styled.main`
    z-index : 3;
    width: 1000px;
    height: 600px;
    background-color: #ffffff;
    color: #000;
    display :flex;
    position: absolute;
    top : 50%;
    left: 50%;
    transform : translate(-50%, -50%);
    border-radius: 26px;
    box-shadow: 1px 1px 50px #a8a8a8;
    .left{
        width: 500px;
        height: 600px;

        .logo{
            display: flex;
            margin-left: -300px;
            gap : -10px;
            img{
                width: 40px;
                margin: 10px 0px 0px 10px;
            }
            a{
                font-family: "Poppins", sans-serif;
                font-weight: 600;
                font-size: 18px;
                margin-left: -10px;
            }
        }

        .logintxt{
            font-family: "Poppins", sans-serif;
            font-size: 30px;
            margin: 0px 0px 0px 80px;
            font-weight: 800;
        }

        .google{
            width: 200px;
            height: 35px;
            display : flex;
            align-items: center;
            border: 1px solid black;
            gap: 8px;
            margin: 20px 0px 30px 150px;
            padding: 3px 13px 3px 13px;
            background-color: #ffffff;
            border-radius: 10px;
            cursor: pointer;
            img{
                width: 20px;

            }
            span{
                font-family: "Poppins", sans-serif;
                font-weight: 400;
            }
        }

        .or{
            display: flex;
            justify-content: center;
            a{
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

            .donot{
                font-family: "Poppins", sans-serif;
                display: flex;
                margin: 30px 0px 0px 100px;

            }

            .register{
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

    .right{
        width: 500px;
        height: 600px;
        position : relative;
        .cross{
            img{
                width: 20px;
                height: 20px;
                position :absolute;
                right: 0;
                margin: 10px 0px 0px 0px;
                padding-right: 10px;

            }
        }

        img{
        width: 500px;
        height: 400px;
        border-radius: 26px;
        margin-top: 100px;
        }
    }

   



`;

