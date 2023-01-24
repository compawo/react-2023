import {Comment} from "../Comment/Comment";

const Comments = ({users}) => {


    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};