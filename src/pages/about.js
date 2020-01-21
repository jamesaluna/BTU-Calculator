import React from "react";

const About = () => {
    return (
        <div>
            <ul>
                {['what', 'the', 'hell', 'is', 'this', 'wowzers, mowsers'].map((user, idx) => {
                    return <li key={idx}>{user}</li>
                })}
            </ul>
        </div>
    )
};

export default About;