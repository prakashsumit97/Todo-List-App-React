import React from "react";
/**
 * useContext in React is commonly used for accessing global data like user details or session 
 * information across various components without the need for prop drilling (passing data through multiple layers of components).
 */
const AuthContext = React.createContext();

export default AuthContext;
