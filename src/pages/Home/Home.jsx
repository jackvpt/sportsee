import "./Home.scss"
import React from "react"
import { Link } from "react-router"

export default function Home() {
  // const users = fetchResult.data
  const users = [
    {
      id: 12,
      firstName: "Karl",
    },
    {
      id: 18,
      firstName: "Cecilia",
    },
  ]

  return (
    <div>
      <h1>Bienvenue</h1>
      <h2>Choisissez le profil:</h2>
      {users.map((user, index) => (
        <Link key={index} to={`/profile/${user.id}`}>
          <div className="container__user">{user.firstName}</div>
        </Link>
      ))}
    </div>
  )
}
