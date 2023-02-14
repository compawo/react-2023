import {Component} from "react";

class Comment extends Component {

    render() {
        const {id, postId, name, body} = this.props.comment;
        return (
            <div>
                <div>id: {id}</div>
                <div>postId: {postId}</div>
                <div>name: {name}</div>
                <div>body: {body}</div>
            </div>
        )
    }
}

export {
    Comment
}