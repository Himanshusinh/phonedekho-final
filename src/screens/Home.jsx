import React from "react";
import styled from "styled-components";
import Upcomming from "../components/Upcomming";
import Phonebox from "../components/Phonebox";
import Compare_phone_compo from "../components/Compare_phone_compo";
import View_phone from "../components/View_phone";

const Home = ({currentscreen}) => {
  return (
    <Main>
      <Upcomming />

      <div className="show-phone-boxes">
        <div className="first-line">
          <Phonebox
            image="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/compare-photos%2Fiphonepromax.png?alt=media&token=70905c19-af61-40d7-9c1a-dfefbeb23bef"
            name="iPhone 15 pro max "
            price="₹ 1,77,990"
            link="https://iphone15promaxphonedekho.netlify.app"
          />
          <Phonebox
            image="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/compare-photos%2Fsamsungs24ultra.png?alt=media&token=3bfa9639-4ea0-48f8-92d4-b8b530654637"
            name="Samsung 24 Ultra"
            price="₹ 1,39,900"
            link="https://samsung24ultra.netlify.app"
          />
          <Phonebox
            image="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/compare-photos%2Foneplus.png?alt=media&token=472ccffe-1300-4e9f-9566-b54065fc9462"
            name="OnePlus 12"
            price="₹ 69,999"
            link="https://oneplus12phonesdekho.netlify.app/"
          />
          <Phonebox
            image="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/compare-photos%2Fvivo.png?alt=media&token=2149d4ba-9e75-4049-9fd3-73b26f53be53"
            name="vivo v30"
            price="₹ 87,999"
            link="https://vivov30pro.netlify.app/"
          />
          <Phonebox
            image="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/s1-removebg-preview-3.png?alt=media&token=e08d8ce1-fe71-4162-820a-bb86ebbf4602"
            name="Xiaomi 14"
            price="₹ 69,999"
            link="https://xiaomi14ultra.netlify.app/"
          />
        </div>
        <div className="second-line"></div>
      </div>

      <div className="compare-phone-compo">
        <Compare_phone_compo currentscreen = {currentscreen} />
      </div>

      <div className="view-compo">
        <View_phone currentscreen = {currentscreen}  />
      </div>

      <div className="footer">
        

      <span> Mobile Number   :+91 7203907017  |
              Email : phoneDekho20@gmail.com
      </span>

        <div className="show">
          <ul>
           <li>User Agreement</li>
          <li>Terms of Sales</li>
          <li>E-Waste management</li>
          <li>Security Response Center</li>
          </ul>
          <span>India</span>
          </div>
          <a>©  2024 Phone Dekho. All Rights Reserved.</a>
      </div>
    </Main>
  );
};

export default Home;

const Main = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  .show-phone-boxes {
    margin: 10px 0px 0px 45px;
    display: flex;
    max-width: 91%;
    flex-direction: column;
    gap: 50px;

    .first-line {
      display: flex;
      overflow: scroll;
      gap: 30px;
    }

    .second-line {
      display: flex;
      overflow: scroll;
      gap: 30px;
    }
  }

  /* compare-phone-compo */
  .compare-phone-compo {
    margin: 140px 0px 0px 100px;
  }
  /* view-compo */
  .view-compo {
    margin: 100px 0px 0px 100px;
  }

  .footer{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width: 100%;
    height: 130px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    background: #ebf3fe;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 7px );
-webkit-backdrop-filter: blur( 7px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
border-radius: 20px 20px 0px 0px ;







    color: #000;

    span{
      display: flex;
      margin: 20px 0px 0px 50px;
      color: #5a5a5a;
    }

    ul{
      display: flex;
      gap: 30px;
      margin: 10px 0px 0px 50px;
      li{
        list-style: none;
        color: #5a5a5a;
      }
      li:hover{
        color: #000;
      }
    }

    .show{
      display: flex;
      gap: 700px;
    }

    a{
      display :flex;
      justify-content : center;
      align-items: end;
      margin: 10px 0px 0px 50px;
    }
    

  }
`;
