import React from 'react';

export default function Question({question, handleChange}) {
    console.log(question, "props");
    return (
        <div>
            <button onClick={handleChange}>{question}</button>
        </div>
    )
}
