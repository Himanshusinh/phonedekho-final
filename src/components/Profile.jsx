import React, { useState } from 'react'
import styled from 'styled-components'
import { getAuth , signOut } from 'firebase/auth';
import { auth } from '../config/firebase.js';
import Loding from './Loding.jsx';
import Home from '../screens/Home.jsx';


const Profile = ({username , email}) => {

  const [profile, setprofile] = useState(true);
  const [loding , setloding] = useState(false);
  const [homescreen, sethomescreen] = useState(false);

  const Signoutaccount = async () => {
    await signOut(auth);
    setloding(true);

    if(signOut){
      sethomescreen(true);
      setprofile(false);
      window.location.reload();
    }
  }

 if (!auth.currentUser) {
     return null; 
  }

  if (loding) {
    return <Loding />;
  }
  
 

  return (profile) ? (
    <Main>
        <table>
            <tr>
               {auth?.currentUser?.displayName || username}
            </tr>
            <tr>
                {auth?.currentUser?.email || email}
            </tr>
        </table>
        {auth.currentUser &&  <button onClick={Signoutaccount}>Log out</button>}
    {loding && <Loding />}
   
    </Main>
  ) : sethomescreen && <Home />  ;
}

export default Profile

const Main = styled.main`
    width: 350px;
    height: 150px;
    background-color: #000;
    position: absolute;
    right: 0;
    margin: 50px 50px 0px 0px ;
    border-radius: 20px 0px 20px 20px;
    box-shadow: 1px 1px 10px #c4c4c4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

   table{
        display: flex;
        flex-direction: column;
        tr{
        font-size: 16px;
        font-family: "Nunito Sans", sans-serif;
        margin: 10px 0px 0px 0px;
        
        }
   }
    

    button{
        width: 300px;
        height: 40px;
        background-color: #fff;
        border: none;
        outline : none;
        color: #000;
        border-radius: 20px;
        margin: 20px;
    }
    
`;