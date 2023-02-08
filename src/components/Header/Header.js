import { NavLink} from "react-router-dom";


const Header = () => {
    return (
        <div className={'Header'}>
            <NavLink to={''}>home</NavLink>
            <NavLink to={"albums"}>albums</NavLink>
            <NavLink to={"comments"}>comments</NavLink>
            <NavLink to={"todos"}>todos</NavLink>
        </div>
    );
};

export {Header};