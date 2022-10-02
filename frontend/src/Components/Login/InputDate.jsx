import axios from "axios";
import React from "react";
import { useState } from "react";

const Input = () => {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        switch(e.target.name){
            case 'day':
                setDay(value);
                break;
            case 'month':
                setMonth(value);
                break;
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const coordinates = sendData(day, month);
        console.log(coordinates);
        //const aladin = A.aladin('#aladin-lite-div', {survey: "P/DSS2/color", fov:60, target: coordenadas});
    }

    const sendData = (day, month) => {
        const info = {
            day: day,
            month: month
        };
        axios
            .head('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS')
            .post("http://localhost:4000/binary", info)
            .then((response) => response.json())
            .then(data =>{
                return data;
            })
    }
    
    return (
        <div className="input">
            <form onSubmit={handleSubmit}>
                Day: <input type='number' name="day" onChange={handleChange} required/> <br></br>
                Month: <input type='number' name="month" onChange={handleChange} required/> <br></br>
                <button>Next</button>
            </form>
            
        </div>
    )
}

export default Input;