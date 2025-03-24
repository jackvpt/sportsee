import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../../pages/Home/Home"
import Profile from "../../pages/Profile/Profile"
import Error from "../../pages/Error/Error"

export default function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <main>
          <Sidebar />
          <section className="section__main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile/:userId" element={<Profile />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </section>
        </main>
      </BrowserRouter>
    </React.StrictMode>
  )
}
