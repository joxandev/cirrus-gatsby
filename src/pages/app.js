import React from "react"
import { Link } from "gatsby"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Profile from "../components/profile"
import Login from "../components/login"

import * as Auth from "../_services/auth.service"

const App = () => (
  <Layout>
    <h1 className="is-size-3">Cirrus Dashboad</h1>
    <Link to="/app/profile">Profile</Link> | <Link to="/app">Login</Link>
    <Router>{Auth.isAuth ? <Profile path="/" /> : <Login path="/" />}</Router>
  </Layout>
)

export default App
