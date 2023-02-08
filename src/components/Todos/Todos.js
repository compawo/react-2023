import React from 'react';

export const Todos = ({todos = []}) => {
    return (
        <div style={{
            display:
                'flex',
            flexDirection: 'column',
            gap: 10,
        }}>
            {todos.map(item => (
                <div
                    key={item.id}
                    style={{
                        background: 'lightgrey'
                    }}
                >
                    <div>UserId: {item.userId}</div>
                    <div>ID: {item.id}</div>
                    <div>Title: {item.title}</div>
                    <div>Status: {item.completed ? 'Completed' : 'Not done yet'}</div>
                </div>
            ))}
        </div>
    );
};