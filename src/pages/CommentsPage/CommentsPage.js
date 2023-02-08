import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {Comments} from "../../components";
import {todosService as commentsService} from "../../services";



export const CommentsPage = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments([...data]));
    }, [])
    return (
        <div style={{ width: '100%', margin: '0 auto' }}>
            <h1>Comments Page</h1>
            <hr/>
            <Comments comments={comments} />
            <hr/>
            <Outlet />
        </div>
    );
};