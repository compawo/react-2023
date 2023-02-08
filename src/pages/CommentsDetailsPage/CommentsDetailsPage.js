import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {CommentsDetails} from "../../components/CommentsDetails/CommentsDetails";



const CommentsDetailsPage = () => {
    const {postId} = useParams();
    const {state} = useLocation();


    return (
        <div>
            <CommentsDetails postId={postId}  state={state}/>
        </div>
    );
};
export {CommentsDetailsPage};