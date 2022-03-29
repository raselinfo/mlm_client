import React, { useEffect, useState } from 'react';

const PurchesHistory = () => {
    let [history, setPurchesHistory] = useState([])
    useEffect(() => {
        fetch(`https://mlmserver.herokuapp.com/purchesHistory`)
            .then(res => res.json())
            .then(data => {
           
                setPurchesHistory(data)
            }
            )
    }, [])
    return (
        <div>
            <h1>purchase History</h1>
            <ul>
                {history.map((item, index) => {
                    return <li key={index} className="mb-5">
                        <h3>Email To: {item.ToEmail}</h3>
                        <h3>Email From: {item.formEmail}</h3>
                        <h3>Amount: {item.amount} Taka</h3>
                        <hr />
                    </li>
                })}

            </ul>
        </div>
    );
};

export default PurchesHistory;