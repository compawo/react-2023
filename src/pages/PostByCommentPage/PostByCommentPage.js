import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services";
import {urls} from "../../configs";

export const PostByCommentPage = () => {
    const {postId} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    useEffect(() => {
        if (postId) {
            postService.getPostById(postId).then(({data}) => setPost({...data}))
        }
    }, [postId])
    if (!post) return null;
    return (
        <div style={{width: '100%', margin: '0 auto'}}>
            <div>PostID: {postId}</div>
            <div>Title: {post.title}</div>
            <div>Content: {post.body}</div>
            <div></div>
            <button onClick={() => navigate(`/${urls.comments}`)}>{'<'}Back</button>
        </div>
    );
};