import { Navigate, Outlet } from "react-router-dom"
import { useCookies } from "react-cookie"

const useAuth = () => {
    const [cookies] = useCookies("accessToken")
    return cookies.accessToken
    // 2 ways method to protected routes
    // let verify = cookies.accessToken !== undefined ? true : false
    // const user = {loggedIn : verify}
    // return user && user.loggedIn
}

const ProtectedRoutes = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes