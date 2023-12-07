import { useLocation } from "react-router-dom"

export const Authorized = ({ children }) => {
    const location = useLocation()

  return children;
}

