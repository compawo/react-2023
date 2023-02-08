import { useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const navigate = useNavigate();
    const {id, postId, body, email} = comment;

    return (
        <div>
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={()=>navigate(id.toString(), {state:comment})}>Details</button>

        </div>
    );
};

export {Comment};