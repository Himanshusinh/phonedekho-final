import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Performance from "./Performance";
import { db } from "../config/firebase.js";
import { getDocs, collection } from "firebase/firestore";

const Phone_details = ({getdata1, getdata2}) => {
  const [showdetails, setshowdetails] = useState([]);

  const phonedetails = collection(db, "compare-phone");

  useEffect(() => {
    const details = async () => {
      try {
        const data = await getDocs(phonedetails);
        const filterdata = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setshowdetails(filterdata);
      } catch (err) {
        console.error(err);
      }
    };
    details();
  }, []);

  return (
    <Main>
       
      <div className="phone-details">
      {
            getdata1.map((data) => (
                <div className="left">
                <span className="phone-name">{data.name}</span>
                <span className="phone-price">{data.price}</span>
      
                <table>
                  <tr>
                    <td>Processor</td>
                    <td>{data.processor}</td>
                  </tr>
      
                  <tr>
                    <td>Battery</td>
                    <td>{data.battery}</td>
                  </tr>
                  <tr>
                    <td>Camara</td>
                    <td>{data.camara}</td>
                  </tr>
                  <tr>
                    <td>Charging</td>
                    <td>{data.charging}</td>
                  </tr>
                  <tr>
                    <td>width</td>
                    <td>{data.width}</td>
                  </tr>
                  <tr>
                    <td>height</td>
                    <td>{data.height}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{data.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{data.rom}</td>
                  </tr>
                  <tr>
                    <td>Updates</td>
                    <td>{data.updates}</td>
                  </tr>
                  <tr>
                    <td>Other Specifications</td>
                    <td>{data.specs}</td>
                  </tr>
                </table>
              </div>
            ))
        }

        {
            getdata2.map((data) => (
                <div className="right">
                <span className="phone-name">{data.name}</span>
                <span className="phone-price price2">{data.price}</span>
      
                <table>
                <tr>
                    <td>Processor</td>
                    <td>{data.processor}</td>
                  </tr>
      
                  <tr>
                    <td>Battery</td>
                    <td>{data.battery}</td>
                  </tr>
                  <tr>
                    <td>Camara</td>
                    <td>{data.camara}</td>
                  </tr>
                  <tr>
                    <td>Charging</td>
                    <td>{data.charging}</td>
                  </tr>
                  <tr>
                    <td>width</td>
                    <td>{data.width}</td>
                  </tr>
                  <tr>
                    <td>height</td>
                    <td>{data.height}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{data.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{data.rom}</td>
                  </tr>
                  <tr>
                    <td>Updates</td>
                    <td>{data.updates}</td>
                  </tr>
                  <tr>
                    <td>Other Specifications</td>
                    <td>{data.specs}</td>
                  </tr>
                </table>
              </div>
            ))
        }
       
       
      </div>
      

      <Performance getdata1={getdata1} getdata2={getdata2} />
    </Main>
  );
};

export default Phone_details;

const Main = styled.main`
  .phone-details {
    display: flex;
  }

  .phone-name {
    font-size: 30px;
    margin: 20px 0px 0px 30px;
  }
  .phone-price {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border-radius: 10px;
    background-color: #ea4141;
    padding: 10px;
    width: 140px;
    height: 30px;
    margin: 20px 0px 0px 30px;
    color: #fff;
  }

  .price2 {
    background-color: #3e3ed9;
  }

  .left {
    font-family: "Poppins", sans-serif;
    width: 40%;
    height: auto;
    margin: 40px 0px 0px 70px;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 10px #c4c4c4;
    padding: 20px;

    table {
      margin: 20px 0px 0px 30px;
      border: 1px solid black;
      tr {
        td {
          border-bottom: 1px solid black;
          font-size: 17px;
        }
      }
    }
  }

  .right {
    font-family: "Poppins", sans-serif;
    width: 40%;
    height: 40%;
    margin: 40px 0px 0px 70px;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 10px #d1d1d1;
    padding: 10px;

    table {
      margin: 20px 0px 0px 30px;
      border: 1px solid black;
      tr {
        td {
          border-bottom: 1px solid black;
          font-size: 17px;
        }
      }
    }
  }
`;
