import {useEffect, useState} from "react";

import {postService} from "../../services";
import {Comment} from "../Comment/Comment";



const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data})=>setComments([...data]))
    }, [])

    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} post={comment}/>)}
        </div>
    );
};

export {Comments};
