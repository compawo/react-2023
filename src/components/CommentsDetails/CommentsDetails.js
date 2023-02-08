import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services";

const CommentsDetails = ({commentId, state}) => {
    const [comment, setComment] = useState(null);

    const commentId = useParams();


    useEffect(() => {
        if (state) {
            console.log(state);
            setComment({...state})
        } else {
            postService.getById(commentId).then(({data}) => {
                setComment(data)
            })
        }
    }, [])

    return (
        <div>
            {comment &&
                <>
                    <div>id: {comment.id}</div>
                    <div>postId: {comment.postId}</div>
                    <div>title: {comment.title}</div>
                    <div>body: {comment.body}</div>
                </>
            }

        </div>
    );
};

export {CommentsDetails};