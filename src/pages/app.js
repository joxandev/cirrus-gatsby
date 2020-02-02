import React from "react"
import { Link } from "gatsby"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import ProtectedRoute from "../components/protectedRoute"
import Profile from "../components/profile"
import Login from "../components/login"

import * as Auth from "../_services/auth.service"

const App = () => {
  return (
    <Layout>
      <h1 className="is-size-3">Cirrus Dashboad: {Auth.isAuth().toString()}</h1>
      <Link to="/app/profile">Profile</Link> |{" "}
      <Link to="/app/login">Login</Link>
      <Router>
        <ProtectedRoute path="/profile" component={Profile} />
        <Login path="/login" />
      </Router>
    </Layout>
  )
}

export default App
