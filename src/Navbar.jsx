import { useContext } from "react";
import AuthContext from "./AuthContext";


export function Navbar() {
    const { user } = useContext(AuthContext);
    return <div>{user ? `Welcome, ${user.name}` : "Not logged in"}</div>;
}
