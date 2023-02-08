import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services";

const CommentsDetails = ({postId, state}) => {
    const [comment, setComment] = useState(null);


    useEffect(() => {
        if (state) {
            console.log(state);
            setComment({...state})
        } else {
            postService.getById(postId).then(({data}) => {
                setComment(data)
            })
        }
    }, [postId])

    return (
        <div>
            {comment &&
                <>
                    <div>id: {comment.id}</div>
                    <div>commentId: {comment.postId}</div>
                    <div>title: {comment.title}</div>
                    <div>body: {comment.body}</div>
                </>
            }
        </div>
    );
};

export {CommentsDetails};