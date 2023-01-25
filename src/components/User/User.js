import React from 'react';

const User = ({user, setUserDetails}) => {
    const {id, name, website} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>website: {website}</div>
            <button onClick={() => setUserDetails(user)}>Get Name</button>
        </div>
    );
};

export {User};