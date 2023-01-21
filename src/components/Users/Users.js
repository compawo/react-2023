import React, {useEffect, useState} from 'react';
import {User} from "../User/User";
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(value => value.data).then(value => setUsers([...value]))
    }, []);

    return (
        <div>
            <h1>UserDetails:</h1>
            {userDetails && <div>{userDetails.id}: {userDetails.website}</div>}

            <hr/>
            <h1>Users</h1>
            {users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails}/>)}

        </div>
    );
};

export {Users};