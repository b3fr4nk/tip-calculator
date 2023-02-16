import { useState } from "react";
import React from 'react';

function TipCalc() {
    const [bill, setBill] = useState("");
    const [tip, setTip] = useState("");
    const [split, setSplit] = useState("");
    
    function handleSubmit(event) {
        event.preventDefault();
    }
    
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label>
                    Bill:
                    <input type="text" value={bill} onChange={(e) => setBill(e.target.value)} />
                </label>
                <label>
                    Tip %:
                    <input type="text" value={tip} onChange={(e) => setTip(e.target.value)} />
                </label>
                <label>
                    Num People:
                    <input type="text" value={split} onChange={(e) => setSplit(e.target.value)} />
                </label>
            </form>

            <h2>Total: ${(bill*(1 + tip/100).toFixed(2))}</h2>
            <h2>Per Person: ${((bill*(1 + tip/100))/split).toFixed(2)} </h2>
        </section>
        
    );
}

export default TipCalc;