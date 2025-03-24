import React from "react"
import "./Home.scss"
import { useFetch } from "../../utils/useFetch"

export default function Home() {
  // Fetch call returns 'data', 'isLoading' and 'error'
  const fetchResult = useFetch("/__mocks__/users.json")
  console.log(fetchResult.data)
  
  return (
    <React.Fragment>
      <div>
        <h1>Bonjour</h1>
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      </div>
    </React.Fragment>
  )
}
