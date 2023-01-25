import React, {useEffect, useState} from 'react';


import {userService} from "../../services";
import {User} from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers([...data]))
    }, []);

    return (
        <div>
            <h1>UserDetails:</h1>
            {userDetails && <div>{userDetails.id}: {userDetails.name}</div>}

            <hr/>

            <h1>Users</h1>
            {users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails}/>)}

        </div>
    );
};

export {Users};