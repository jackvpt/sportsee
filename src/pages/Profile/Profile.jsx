import React from "react"
import "./Profile.scss"
import { useState, useEffect } from "react"
import { useParams, Navigate } from "react-router"
import { useFetch } from "../../utils/useFetch"
import { fetchUsers, fetchSessionsByUserId } from "../../services/api"
import ChartActivity from "../../components/ChartActivity/ChartActivity"
import ChartAverageDuration from "../../components/ChartAverageDuration/ChartAverageDuration"
import ChartPerformances from "../../components/ChartPerformances/ChartPerformances"
import ChartScore from "../../components/ChartScore/ChartScore"
import KeyDataCard from "../../components/KeyDataCard/KeyDataCard"

const Profile = () => {
  // Get id from Home page
  let { userId } = useParams()
  userId = Number(userId)

  const [users, setUsers] = useState([])
  const [sessions, setSessions] = useState([])

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setIsError(false)
  
      try {
        const [usersData, sessionsData] = await Promise.all([
          fetchUsers(),
          fetchSessionsByUserId(userId),
        ])
        setUsers(usersData)
        setSessions(sessionsData.sessions)
      } catch (error) {
        setIsError(true)
        alert(error)
      } finally {
        setIsLoading(false)
      }
    }
  
    fetchData()
  }, [userId])
  // Fetch call returns 'data', 'isLoading' and 'error'
  // const fetchUsers = useFetch("/__mocks__/users.json")
  const fetchActivities = useFetch("/__mocks__/activities.json")
  const fetchPerformances = useFetch("/__mocks__/performances.json")
  // const fetchSessions = useFetch("/__mocks__/sessions.json")
  
  if (isLoading) return <p>Chargement des utilisateurs...</p>
  if (isError)
    return (
  <p>❌ Une erreur est survenue lors du chargement des utilisateurs.</p>
)

  // Check if fetch isLoading or if error
  if (
    // fetchUsers.isLoading ||
    fetchActivities.isLoading ||
    fetchPerformances.isLoading 
    // fetchSessions.isLoading
  ) {
    return
  }

  if (
    // fetchUsers.error ||
    fetchActivities.error ||
    fetchPerformances.error 
    // fetchSessions.error
  ) {
    return <Navigate to="*" /> // Navigate to Error page
  }

  // Get data from fetch
  // const users = fetchUsers.data
  let user
  const activities = fetchActivities.data
  let activity
  const performances = fetchPerformances.data
  let performance
  // const sessions = fetchSessions.data
  // let session

  // Get user based on id
  if (users) {
    user = users.find((element) => element.id === userId)
  }

  if (!user) {
    return <Navigate to="*" /> // Navigate to Error page
  }

  // Get activity based on user id
  if (activities) {
    activity = activities.find((element) => element.userId === user.id).sessions
  }

  // Get performance based on user id
  if (performances) {
    performance = performances.find((element) => element.userId === user.id)
  }

  // Get session based on user id
  // if (sessions) {
  //   session = sessions.find((element) => element.userId === userId)
  // }



  return (
    <article>
      <div>
        <h1>
          Bonjour
          <span className="userFirstName"> {user.firstName}</span>
        </h1>
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      </div>
      <section className="container__dashboard">
        <div className="container__dashboard__charts">
          <div className="dailyActivity">
            <ChartActivity data={activity} />
          </div>
          <div className="miniCharts">
            <div className="miniCharts__chart averageDuration">
              <ChartAverageDuration data={sessions} />
            </div>
            <div className="miniCharts__chart performances">
              <ChartPerformances data={performance} />
            </div>
            <div className="miniCharts__chart score">
              <ChartScore data={user.score} />
            </div>
          </div>
        </div>
        <div className="container__dashboard__keyDatas">
          <KeyDataCard title="Calories" value={user.calorieCount} unit="kCal" />
          <KeyDataCard title="Proteines" value={user.proteinCount} unit="g" />
          <KeyDataCard
            title="Glucides"
            value={user.carbohydrateCount}
            unit="g"
          />
          <KeyDataCard title="Lipides" value={user.lipidCount} unit="g" />
        </div>
      </section>
    </article>
  )
}

export default Profile
