import { NavBarClass } from "../SharedStyles";
import UserImageContext from "../Contexts/UserImageContext";
import { useContext } from "react";

export default function NavBar() {
    const {userImage} = useContext(UserImageContext);
    return(
        <NavBarClass>
            <h1>SpaceTrack</h1>
            <img src={userImage} ></img>
        </NavBarClass>
    )
}