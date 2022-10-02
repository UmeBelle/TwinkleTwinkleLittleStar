import React from "react";
import { useState } from "react";

const input = () => {
    const [state, setState] = useState({
        words: ""
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
            text: words
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
                    Write a feeling: <input name="words" onChange={handleChange} required/>
                    <button>Next</button>
                </form>
            </div>
    )
}

export default input();