import React from "react"
import MainMenu from "./MainMenu"
// import "./layout.css"

const Layout = ({ children }) => (
  <div>
    <MainMenu />
    {children}
  </div>
)

export default Layout
