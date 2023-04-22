import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const MainPage = () => {

    const [ users, setUsers ] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(res => setUsers(res))
    }, [])

    return <>
        <h1>main page</h1>
        {
            users.map( user =>
            <li key={user.id}>
                <Link>
                    {user.name}
                </Link>
            </li>
            )
        }
    </>
};

export default MainPage;