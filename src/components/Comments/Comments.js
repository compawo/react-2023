import {Component} from "react";
import {Comment} from "../Comment/Comment";
import {commentService} from "../../services";

class Comments extends Component{
    constructor(props) {
        super(props);
        this.state = {comments:[]}
    }
    componentDidMount() {
        commentService.getAll().then(({data})=>this.setState({comments:[...data]}))
    }

    render() {
        return(
            <div>
                {this.state.comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
            </div>
        )
    }
}

export {
    Comments
}