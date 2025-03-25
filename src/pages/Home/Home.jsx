import "./Home.scss"
import React from "react"
import { Link } from "react-router"
import { useFetch } from "../../utils/useFetch"

export default function Home() {
  // Fetch call returns 'data', 'isLoading' and 'error'
  const fetchResult = useFetch("/__mocks__/users.json")

  if (fetchResult.isLoading || fetchResult.error) {
    return
  }

  const users = fetchResult.data

  return (
    <div>
      <h1>Bienvenue</h1>
      <h2>Choisissez le profil:</h2>
      {users.map((user, index) => (
        <Link key={index} to={`/profile/${user.id}`}>
          <div className="container__user">{user.userInfos.firstName}</div>
        </Link>
      ))}
    </div>
  )
}
