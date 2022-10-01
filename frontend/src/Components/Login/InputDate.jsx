import React from "react";
import { useState } from "react";

const input = () => {
    const [state, setState] = useState({
        day: 0,
        month: 0
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        })

    }
    const handleSubmit = (e) => {
        sendData();
    }

    const sendData = async () => {
        const info = {
            day: day,
            month: month
        };
        try {
            await fetch("http://localhost:4000", {
                method: "POST",
                data: JSON.stringify(info),
            
            headers: {
                "Content-Type": "application/json"
            }
        })
          
        } catch (error) {
          alert("Error inesperaddo");
        }
    };

    return (
        <div className="input">
            <form onSubmit={handleSubmit}>
                <input type={number} name="day" onChange={handleChange}>Day: </input>
                <input type={number} name="month" onChange={handleChange}>Month: </input>
                <button>Next</button>
            </form>
            
        </div>
    )
}

export default input();