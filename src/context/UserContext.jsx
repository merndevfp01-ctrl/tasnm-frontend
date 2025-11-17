import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider(props) {
    const [isAuthenticate, setIsAUthenticate] = useState(false);
    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('token');
            const user = localStorage.getItem('user');
            const admin = localStorage.getItem('admin');

            if (token && user) {
                setIsAUthenticate(true)
                setUser(JSON.parse(user));
                if (admin) {
                    setAdmin(JSON.parse(admin))
                }
            }
            setLoading(false);
        }
        checkAuth();
    }, []);

    const login = (user, token, admin = null) => {
        setIsAUthenticate(true);
        setUser(user);
        if (admin) setAdmin(admin);
        
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user));
        if (admin) localStorage.setItem('admin', JSON.stringify(admin))
    };

    const logout = () => {
        setIsAUthenticate(false)
        setAdmin(null)
        setUser(null)

        localStorage.removeItem('token'),
            localStorage.removeItem('user'),
            localStorage.removeItem('admin')
    };

    const values = {
        login,
        logout,
        loading,
        isAuthenticate, setIsAUthenticate,
        user, setUser,
        admin, setAdmin,
    }

    return <>
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    </>
}

// export const useAuth = () => useContext(UserContext);