import React, { Component } from "react"
import { navigate } from "gatsby"
import * as Auth from "../_services/auth.service"

const ProtectedRoute = ({ component: Component, location, ...rest }) => {
  console.log(location)
  if (!Auth.isAuth() && location.pathname !== `/app/login`) {
    navigate("/app/login")
    return null
  }

  return <Component {...rest} />
}

export default ProtectedRoute
