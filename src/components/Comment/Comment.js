import React from 'react';

const Comment = ({user}) => {
    const {id, name, email, body} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Comment};