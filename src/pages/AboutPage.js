import React from 'react';
import {useNavigate} from "react-router-dom";

function AboutPage() {
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    return (
        <div>
            <button onClick={back}>back</button>
            <h1>about page</h1>
        </div>
    );
}

export default AboutPage;