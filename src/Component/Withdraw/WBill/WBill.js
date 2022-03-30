import React, { useEffect, useRef, useState } from "react";

const ComponentName = (props) => {
  const {
    name,
    amount,
    withdrawOption,
    accountNumber,
    agentUserName,
    date, email
  } = props.wic;
  let currentBlance = props.currentBlance

  let totalCost = (amount * 5) / 100;

  let total = amount - totalCost;

  let USERNAME = process.env.REACT_APP_USERNAME;
  let PASSWORD = process.env.REACT_APP_PASSWORD;
  let number = `88${accountNumber}`;
  let message = `You have successfully requested for the withdrawal  of the money. You will get your money in next 24hours. Thank You`;

  const [isCliced, setIsClied] = useState(false)

  const withdrawHandler = () => {
    
    fetch(`http://localhost:5000/withdraw-request/${email}`, {
      method: "POST",
      body: JSON.stringify({
        name,
        amount,
        withdrawOption,
        accountNumber,
        agentUserName,
        total,
        totalCost,
        date, 
        email,
        currentBlance
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 1) {
         
          fetch(`http://66.45.237.70/api.php?username=${USERNAME}&password=${PASSWORD}&number=${number}&message=${message}`, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: "",
            redirect: 'follow'
          })
            .then((res) => res.text())
            .then(result => {
              
            }).catch(err => {
             
              setIsClied(true)
            })
        }
      });
  };

  return (
    <div>
      <div className="w-bill">
        <div className="d-f2">
          <h6>Name:</h6>
          <h6>{name}</h6>
        </div>
        <div className="d-f2 mt-2">
          <h6>Number:</h6>
          <h6>{accountNumber}</h6>
        </div>
        <div className="d-f2 mt-2">
          <h6>Withdraw Type:</h6>
          <h6>{withdrawOption}</h6>
        </div>
        <div className="d-f2 mt-2">
          <h6>Agent Name:</h6>
          <h6>{agentUserName}</h6>
        </div>
        <div className="d-f2 mt-2">
          <h6>Amount:</h6>
          <h6>{amount}</h6>
        </div>
        <div className="d-f2 mt-2">
          <h6>Service Charge:</h6>
          <h6>{totalCost}</h6>
        </div>
        <div className="d-f mt-2">
          <h6>Total:</h6>
          <h6>{total}</h6>
        </div>
        <div className="d-flex">
          {!isCliced && <button className="up-b mt-3 ms-2" onClick={withdrawHandler}>
            Withdraw
          </button>}


        </div>
      </div>
    </div>
  );
};

export default ComponentName;
