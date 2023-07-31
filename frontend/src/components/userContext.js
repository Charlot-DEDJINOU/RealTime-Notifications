import { createContext } from "react";
import { useState } from "react";
import Socket from "../websocket/socket";
import { useDispatch } from 'react-redux';
import { addNotifications , addNotification } from "../store/notificationsReducer";

const user = JSON.parse(localStorage.getItem('user'))

var ws ;

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const dispatch = useDispatch()
    const [isLogin, setLogin] = useState(user != null)

    const handleAddNotification = (notification) => {
        dispatch(addNotification(notification));
      };

    const handleAddAllNotification = (notifications) => {
        console.log("je suis appellé")
        dispatch(addNotifications(notifications));
    };

    const toggleLogin = () => {
        
        if(isLogin)
            {
                try {
                    ws.closeWebSocket()
                } catch(err) {
                    console.log(err)
                }
            }
        else {
            ws = Socket(handleAddNotification , handleAddAllNotification);
        }

        setLogin(!isLogin)
    }

    return (
        <UserContext.Provider value={{ isLogin, toggleLogin }}>
            {children}
        </UserContext.Provider>
    )
}
