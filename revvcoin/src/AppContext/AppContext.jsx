import React, { useContext, useState } from "react";

export const AppContext = React.createContext();

const USER={
    name:"", isAuth: true
}

export const AppContextProvider=({children})=>{

    const [user, setUser] = useState(USER)

    const Login=(userName)=>{
        setUser({
            name : userName,
            isAuth: false
        })
    }

    const LogOut=()=>{
        setUser(USER)
    }

    return <AppContext.Provider value={{user, Login, LogOut}} >
        {children}
    </AppContext.Provider>
}

export const useAuthContext=()=>{
    const {user, Login, LogOut} = useContext(AppContext);

    return {user, Login, LogOut}
}