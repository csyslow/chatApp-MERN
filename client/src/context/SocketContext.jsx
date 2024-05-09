import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./authContext";
import io from 'socket.io-client'

const SocketContext = createContext();

const useSocketContext = () => {
    return useContext(SocketContext);
};

const SocketContextProvider = ({ children }) => {

    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();
    useEffect(() => {
        if (authUser) {
            //socket connection
            const socket = io('http://localhost:5001/', {
                query: {
                    userId: authUser._id
                }
            });
            setSocket(socket);
            // socket.on()is used to listen to thr events, which can be used in both client and server side
            socket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users);
            });
            //clean up function
            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser])

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>
    )
}

export { SocketContext, SocketContextProvider, useSocketContext }