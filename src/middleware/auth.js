import { Navigate } from "react-router-dom";


export const AuthorizeUser = ({ children }) => {
    const token = localStorage.getItem('token');

    if(!token){
        return <Navigate to={'/'} replace={true}></Navigate>
    }

    return children;
}


export const ProtectRoute = ({ children }) => {
    const email = localStorage.getItem('email')
    const emailorname = localStorage.getItem('emailorname')
    if(!email){
        return <Navigate to={'/'} replace={true}></Navigate>
    }else if(!emailorname){
        return <Navigate to={'/'} replace={true}></Navigate>
    }
    return children;
}