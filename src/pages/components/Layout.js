import React from 'react'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="layout">
      <Navbar></Navbar>
        <div className="content">
            {/* content for each page */ }
        </div>
        <footer>
            Copytight &copy; 2021 Lena Sedkiewicz
        </footer>
    </div>
  )
}
