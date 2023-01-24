import React from 'react';

const User = (user) => {
    let {id, name, username, email, website} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>website: {website}</div>
        </div>
    );
};

export {User};