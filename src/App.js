import {useEffect, useState} from "react";

import {UserForms,  Users} from "./components";
import {userService} from "./services";

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
        </div>
    );
};

export {App};
