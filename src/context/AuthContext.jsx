import { createContext, useContext, useState } from "react";
import { load } from "../utils/localStorage.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [users, setUsers] = useState(load("users"));
    const [user, setUser] = useState(load("logUser"));

    const items = {
        users,
        setUsers,
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={items}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);