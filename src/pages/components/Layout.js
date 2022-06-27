import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
        <div className="content">
          { children }
        </div>
        <footer>
            <p>Copytight &copy; 2021 Lena Sedkiewicz</p>
        </footer>
    </div>
  )
}
