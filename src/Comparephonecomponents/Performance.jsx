import ProgressBar from "@ramonak/react-progress-bar";

import React from "react";
import styled from "styled-components";

const Performance = ({getdata1, getdata2}) => {
  return (
    <Main>
      <div className="header">
        <span>
          <img src="https://firebasestorage.googleapis.com/v0/b/phonedekho-9349d.appspot.com/o/svgs%2Fperformance.svg?alt=media&token=f8f31a8e-1d1f-4279-be26-42bc6e7f9896" />
          Perforformance
        </span>
      </div>

      <div className="detailed-box-section">
        <div className="box">
            {
                getdata1.map((data) => (
                    <div>
                    <span className="specific-detail">Internal Storage</span>
          <div className="progress-bar">
            <div className="phone1">
              <span>{data.rom}</span>
              <ProgressBar
                completed="88"
                width="300px"
                height="17px"
                bgColor="blue"
                baseBgColor="#b3b3b3"
                borderRadius="10px"
              />
            </div>
            </div>
            </div>
                ))
            }
          
            {
                getdata2.map((data) => (
                    <div className="phone2">
                    <span>{data.rom}</span>
                    <ProgressBar
                      completed="90"
                      width="300px"
                      height="17px"
                      bgColor="red"
                      baseBgColor="#b3b3b3"
                      borderRadius="10px"
                    />
                  </div>
                ))
            }
         
        </div>

        <div className="box">
            {
                getdata1.map((data) => (
                <div>
                    <span className="specific-detail">Camara</span>
          <div className="progress-bar">
            <div className="phone1">
              <span>{data.camara}</span>
              <ProgressBar
                completed="90"
                width="300px"
                height="17px"
                bgColor="blue"
                baseBgColor="#b3b3b3"
                borderRadius="10px"
              />
            </div>
            </div>
          </div>
                ))
            }
          

            {
                getdata2.map((data) => (
                    <div className="phone2">
              <span>{data.camara}</span>
              <ProgressBar
                completed="90"
                width="300px"
                height="17px"
                bgColor="red"
                baseBgColor="#b3b3b3"
                borderRadius="10px"
              />
            </div>
          
                ))
            }
            
        </div>

        <div className="box">
            {
                getdata1.map((data) => (
                    <div>
                    <span className="specific-detail">Ram</span>
          <div className="progress-bar">
            <div className="phone1">
              <span>{data.ram}</span>
              <ProgressBar
                completed="90"
                width="300px"
                height="17px"
                bgColor="blue"
                baseBgColor="#b3b3b3"
                borderRadius="10px"
              />
            </div>
            </div>
            </div>
                ))
            }
          

            {
                getdata2.map((data) => (
                    <div className="phone2">
              <span>{data.ram}</span>
              <ProgressBar
                completed="90"
                width="300px"
                height="17px"
                bgColor="red"
                baseBgColor="#b3b3b3"
                borderRadius="10px"
              />
            </div>
          
                ))
            }
            
        </div>
      </div>
    </Main>
  );
};

export default Performance;

const Main = styled.main`
  font-family: "Poppins", sans-serif;

  .detailed-box-section {
    display: flex;
    margin: 20px 0px 0px 20px;
  }

  .header {
    display: flex;
    margin: 20px 0px 0px 65px;
    span {
      font-size: 25px;
    }
    img {
      width: 25px;
      text-underline-offset: 2px solid black;
    }
  }

  .box {
    .specific-detail {
      display: flex;
      margin: 30px 0px 0px 10px;
    }

    margin: 30px 0px 0px 60px;
    width: 350px;
    height: 230px;
    box-shadow: 1px 1px 10px #c1c2c1;
    border-radius: 10px;

    .progress-bar {
      .phone1 {
        display: flex;
        flex-direction: column;
      }

      margin: 30px 0px 0px 10px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }
`;
