import React from 'react';
import {useNavigate} from "react-router-dom";

const PostsPage = () => {
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    return (
        <div>
            <button onClick={back}>back</button>
            <h1>post page</h1>
        </div>
    );
};

export default PostsPage;