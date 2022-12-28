import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../redux/features/auth/authSlice";



export const  ShowOnLogin = ({children}) => {
    const isLoggedIn = useSelector (selectisLoggedIn)
    if (isLoggedIn) {
      return <> {children} </>
    }
    return null
}

export const  ShowOnLogout = ({children}) => {
    const isLoggedIn = useSelector (selectisLoggedIn)
    if (!isLoggedIn) {
      return <> {children} </>
    }
    return null
}