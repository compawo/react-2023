import {Component} from "react";

import {User} from "../User/User";
import {userService} from "../../services";

class Users extends Component{
    constructor(props) {
        super(props);
        this.state = {users:[]}
    }
    componentDidMount() {
        userService.getAll().then(({data})=>this.setState({users:[...data]}))
    }

    render() {
        return(
            <div>
                {this.state.users.map(user=><User key={user.id} user={user}/>)}
            </div>
        )
    }
}

export {
    Users
}