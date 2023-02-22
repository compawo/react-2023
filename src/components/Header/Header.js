import {useSelector} from "react-redux";

const Header = () => {
    const {selectedUser} = useSelector(state => state.users);
    return (
        <div>
            const {selectedUser} = useSelector(state => state.users);
        </div>
    );
};

export {Header};