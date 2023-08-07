import React from "react"
import { navigate } from "gatsby"
import PropTypes from "prop-types"
import { isLoggedIn } from "../services/auth"
import { useAuthValue } from './Auth/AuthContext'


const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const {currentUser} = useAuthValue()
  if(!currentUser){
    navigate("/app/login")
    return null
  }
  /*
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate("/app/login")
    return null
  }
*/
  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}


export default PrivateRoute