import React from 'react';

const FBCPropEx = (props) => {
    console.log(props); // Corrected console log

    if (props.isMarried) { // Simplified conditional check
        return (
            <div>
                <h1>{props.username} is a married person</h1>
                <ul>
                    {props.hobbies.map(hobby => (
                        <li key={hobby}>{hobby}</li> // Added key prop for list items
                    ))}
                </ul>
            </div>
        );
    } else {
        return <h1>Not married</h1>;
    }
}

export default FBCPropEx;
