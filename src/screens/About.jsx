import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Main>
      <div className="title">
        <span className="aboutus">About us </span>
        <span className="mentor">Our Mentor</span>
      </div>

      <div className="profiles">
        <div className="profile1 profile">
          <div className="rectangle">
            <img src="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/Nileshsir-removebg-preview.png?alt=media&token=015e9627-2f34-4a85-800c-9b7cdc9d3e6c" />
          </div>
          <span>Prof.Nilesh Parmar</span>
        </div>
        <div className="profile2 profile">
          <div className="rectangle">
            <img src="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/WhatsApp_Image_2024-04-02_at_14.06.35_2865b449-removebg-preview.png?alt=media&token=23a717ca-fa62-4162-abfa-154ea0a0ba62" />
          </div>
          <span>Prof.Manish kumar </span>
        </div>
      </div>

      <div className="team-members">
        <div className="title">
          <span>Meet out Team</span>
        </div>

        <div className="images">
          <div className="person-profile person-profile1">
            <div className="rectangle">
              <img src="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/Aryan-removebg-preview.png?alt=media&token=b7f30e0f-f3e5-429d-a798-c99e24a2c983" alt="" />
            </div>
            <div className="details">
              <span className="name">Aryan Prajapati </span>
              <span className="work">Research analysis</span>
            </div>
          </div>


          <div className="person-profile person-profile2">
            <div className="rectangle">
              <img src="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/Jay-removebg-preview.png?alt=media&token=743fcf46-46a9-4666-8cd4-260ebd9dcc0e" alt="" />
            </div>
            <div className="details">
              <span className="name">jay suthar </span>
              <span className="work">UI / UX </span>
            </div>
          </div>


          <div className="person-profile person-profile3">
            <div className="rectangle">
              <img src="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/nioo.png?alt=media&token=1d284f2c-b7ca-4873-9fb2-4d3681d30005" alt="" />
            </div>
            <div className="details">
              <span className="name">Neel thakkar</span>
              <span className="work">Data Base Management</span>
            </div>
          </div>


          <div className="person-profile person-profile4">
            <div className="rectangle">
              <img src="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/himm.png?alt=media&token=4e24f70c-2580-4fed-927c-ee92066a0087" alt="" />
            </div>
            <div className="details">
              <span className="name">Himanshu vaghela</span>
              <span className="work">Front end(react)</span>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default About;

const Main = styled.main`
  width: 100%;
  height: auto;

  .title {
    font-family: "AzonixRegular";

    span {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .aboutus {
      font-size: 50px;
      margin-bottom: 30px;
    }
    .mentor {
      font-size: 30px;
    }
  }

  /* profiles */
  .profiles{
    display: flex;
    justify-content: center;
    margin: 80px 0px 0px 0px;
    gap: 200px;
    
    .profile {
      display: flex;
      flex-direction: column;

      .rectangle {
        width: 250px;
        height: 250px;
        background-color:#EBF3FE;
        border-radius: 20px;
      }

      img{
        position: absolute;
        justify-content: center;
        align-items  : center;

      }

      span{
        font-family: "AzonixRegular";
        font-size: 18px;
        justify-content: center;
        display: flex;
        margin-top: 10px;
      }
      
    }
  }

  .profile1{
    img{
      margin-top: -23px;
      width: 250px;
      height: 270px;
    }
  }
  .profile2{
    img{
      margin-top: -30px;
      margin-left: -20px;
      width: 270px;
      height: 280px;
    }
  }



  .team-members{
    margin-bottom: 100px;
    
    .title{
      margin-top: 100px;
      font-size: 30px;
    }

    .images{
      display: flex;
      gap: 50px;
      margin: 50px 0px 0px 100px;
    }

    .person-profile{
      display: flex;
      flex-direction: column;


      .rectangle{
        width: 250px;
        height: 250px;
        background-color:#EBF3FE;
        border-radius: 20px;
        img{
          position :absolute;
          justify-content: center;
          align-items: center;
        }
      }

      .details{
        display: flex;
        flex-direction: column;

        span{
          font-size: 20px;
          font-family: "AzonixRegular";
          margin: 30px 0px 0px 0px;
          display: flex;
          justify-content: center;

        }
      }

      
    }
    
  }

  .person-profile1{
    img{
      margin: -180px 0px 0px -40px;
      width: 330px;
      height: 430px;
    }
  }
  .person-profile2{
    img{
      margin: -150px 0px 0px -120px;
      width: 420px;
      height: 400px;
    }
  }
  .person-profile3{
    img{
      margin: -210px 0px 0px 0px;
      width: 300px;
      height: 460px;
    }
  }
  .person-profile4{
    img{
      margin: -200px 0px 0px -40px;
      width: 370px;
      height: 450px;
    }
  }
`;
