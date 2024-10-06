import ProgressBar from "@ramonak/react-progress-bar";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Overall = ({ getdata1, getdata2 }) => {
  return (
    <Main>
      {getdata1.map((data) => (
        <div>
          <div className="text">Overall rating</div>
          <div className="phone1 phone">
            <span>{data.name}</span>
            <div className="progress-bar">
              <ProgressBar
                completed={data.overall}
                width="500px"
                height="20px"
                bgColor="blue"
                baseBgColor="#b3b3b3"
                borderRadius="10px"
              />
            </div>
          </div>
        </div>
      ))}

      {getdata2.map((data) => (
        <div className="phone2 phone">
          <span>{data.name}</span>
          <div className="progress-bar">
            <ProgressBar
              completed={data.overall}
              width="500px"
              height="20px"
              bgColor="blue"
              baseBgColor="#b3b3b3"
              borderRadius="10px"
            />
          </div>
        </div>
      ))}
    </Main>
  );
};

export default Overall;

const Main = styled.main`
  width: 90%;
  height: 200px;
  box-shadow: 1px 1px 10px #c4c4c4;
  border-radius: 10px;

  margin: 150px 0px 0px 60px;

  .text {
    display: flex;
    font-size: 25px;
    margin: 20px 0px 0px 30px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }

  .phone {
    margin: 40px 0px 0px 50px;
    display: flex;
    gap: 50px;
    span {
      font-size: 18px;
      font-family: "Poppins", sans-serif;
    }
  }

  .phone1 {
    .progress-bar {
      margin: 5px 0px 0px 30px;
    }
  }

  .phone2 {
    margin: 30px 0px 0px 50px;
    .progress-bar {
      margin: 5px 0px 0px 18px;
    }
  }
`;
