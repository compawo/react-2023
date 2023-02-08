import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {CommentsDetails} from "../../components/CommentsDetails/CommentsDetails";



const CommentsDetailsPage = () => {
    const {commentId} = useParams();
    const {state} = useLocation();


    return (
        <div>
            <CommentsDetails commentId={commentId} state={state}/>
        </div>
    );
};
export {CommentsDetailsPage};