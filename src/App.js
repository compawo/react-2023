import {useEffect, useState} from "react";

import {commentService} from "./services";
import {CommentForms, Comments} from "./components";

// import { UserForms, Users} from "./components";
// import {userService} from "./services";


const App = () => {
    // const [users, setUsers] = useState([]);
    //
    // useEffect(() => {
    //     userService.getAll().then(({data})=>setUsers([...data]))
    // }, [])

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments([...data]))
    }, [])

    return (
        <div>
            {/*<UserForms setUsers={setUsers}/>*/}
            {/*<hr/>*/}
            {/*<Users users={users}/>*/}

            <CommentForms setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {App};
