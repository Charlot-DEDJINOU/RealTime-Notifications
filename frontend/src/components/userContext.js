import { createContext } from "react";
import { useState } from "react";

const user = JSON.parse(localStorage.getItem('user'))

export const UserContext = createContext()
export const UserProvider = ({ children }) => {
    const [isLogin, setLogin] = useState(user != null)
    const toggleLogin = () => {
        setLogin(!isLogin)
    }

    return (
        <UserContext.Provider value={{ isLogin, toggleLogin }}>
            {children}
        </UserContext.Provider>
    )
}
