import Login from "../Pages/Login";
import { useAuthContext } from "./AppContext"

export const PrivateRoute=({children})=>{
    const {user} = useAuthContext();

    if (user.isAuth){
        return <Login/>
    }

    return children
}