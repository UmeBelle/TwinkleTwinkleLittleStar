import React from "react";
import { useState, useEffect } from "react";

const Input = () => {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [aladin, setAladin] = useState(null);
    const [text, setText] = useState("");

    useEffect(() => {
        if (aladin){
            aladin.on('objectClicked', function(object) {
                console.log(object);
                if(object){
                    setText("This is a star, "+object.data.name)
                }else{
                    setText("You clicked on void")
                }
            });
        }
        console.log(aladin);
    }, aladin);

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
        const state = window.A.aladin('#aladin-lite-div', {survey: "P/DSS2/color", fov:60, target: day + month});
        e.preventDefault();
        setAladin(state);
        console.log(aladin);
        const cat = window.A.catalog({sourceSize: 20});
        state.addCatalog(cat);
        cat.addSources([window.A.source(day, month, {name: 'your Star'})]);
    }

    return (
        <div className="input">
            <form onSubmit={handleSubmit}>
                Day: <input type='number' name="day" onChange={handleChange} required/> <br></br>
                Month: <input type='number' name="month" onChange={handleChange} required/> <br></br>
                <button>Next</button>
            </form>
            <div id="aladin-lite-div" style={{width:800,height:800} }></div>
            <h1>{text}</h1>
        </div>
    )
}

export default Input;