import { createContext } from "react";
import { useSockets } from "../hooks/useSocket";

export const socketContext = createContext();

export const SocketProvider = ({children}) => {
    const {socket, online} = useSockets('http://localhost:8080')

    return (
        <socketContext.Provider value={{socket, online}}>
            {children}
        </socketContext.Provider>
    )
}