import React, { useEffect, useState } from 'react';
import {Todos} from "../../components";
import {todosService} from "../../services";

export const TodosPage = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos([...data]))
    }, [])
    return (
        <div style={{ width: '100%', margin: '0 auto' }}>
            <h1>Todos Page</h1>
            <Todos todos={todos} />
        </div>
    );
};