import {useEffect, useState} from "react";

import {UserForms,  Users} from "./components";
import {userService} from "./services";
import {CommentForms} from "./components/CommentForms/CommentForms";

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data})=>setUsers([...data]))
    }, [])

    return (
        <div>
            <UserForms setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>

            <CommentForms setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {App};
