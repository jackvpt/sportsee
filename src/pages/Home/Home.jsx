import "./Home.scss"
import React from "react"
import { Link } from "react-router-dom"

/**
 * Home page displaying a welcome message and a list of user profiles.
 *
 * @category Pages
 * @component
 * @returns {JSX.Element} The Home page component with user profile links.
 */
export default function Home() {
  // Example user data (should be replaced by API fetch results)
  const users = [
    { id: 12, firstName: "Karl" },
    { id: 18, firstName: "Cecilia" },
  ]

  return (
    <section className="home">
      <h1>Bienvenue</h1>
      <h2>Choisissez le profil :</h2>
      <div className="home__users">
        {users.map((user) => (
          <Link
            key={user.id}
            to={`/profile/${user.id}`}
            className="home__user-link"
          >
            <div className="home__user">{user.firstName}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
