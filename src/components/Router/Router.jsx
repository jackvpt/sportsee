import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../../pages/Home/Home"
import Profile from "../../pages/Profile/Profile"
import Error from "../../pages/Error/Error"

/**
 * Manages the routing of the application using React Router.
 *
 * This component defines the structure of the app, including:
 * - A fixed header (`Header`)
 * - A sidebar (`Sidebar`)
 * - Dynamic routes for pages (`Home`, `Profile`, and `Error`)
 *
 * @category Router
 * @component
 * @returns {JSX.Element} The Router component handling application navigation.
 */
export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Sidebar />
        <section className="section__main">
          <Routes>
            {/* Home page */}
            <Route path="/" element={<Home />} />

            {/* User profile page (dynamic userId parameter) */}
            <Route path="/profile/:userId" element={<Profile />} />

            {/* Catch-all route for 404 errors */}
            <Route path="*" element={<Error />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  )
}
