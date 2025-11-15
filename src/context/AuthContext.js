import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider(props) {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        localStorage.setItem(token)
        localStorage.setItem(user)
    };

    const logout = () => {
        setToken(null)
        setUser(null)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    };

    const values = { 
        login,
        logout
    }

    return (
        <AuthContext.Provider value={values}>
            {props.children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);