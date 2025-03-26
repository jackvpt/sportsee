import React from "react"
import "./Profile.scss"
import { useState, useEffect } from "react"
import { useParams, Navigate } from "react-router"
import {
  fetchUsers,
  fetchSessionsByUserId,
  fetchActivitiesByUserId,
  fetchPerformancesByUserId,
} from "../../services/api"
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
  const [activities, setActivities] = useState([])
  const [performances, setPerformances] = useState([])

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setIsError(false)

      try {
        const [usersData, sessionsData, activitiesData, performancesData] =
          await Promise.all([
            fetchUsers(),
            fetchSessionsByUserId(userId),
            fetchActivitiesByUserId(userId),
            fetchPerformancesByUserId(userId),
          ])
        setUsers(usersData)
        setSessions(sessionsData.sessions)
        setActivities(activitiesData.sessions)
        setPerformances(performancesData)
      } catch (error) {
        setIsError(true)
        alert(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [userId])

  if (isLoading) return <p>Chargement des utilisateurs...</p>
  if (isError)
    return (
      <p>❌ Une erreur est survenue lors du chargement des utilisateurs.</p>
    )

  let user = null

  // Get user based on id
  if (users) {
    user = users.find((element) => element.id === userId)
  }

  if (!user) {
    return <Navigate to="*" /> // Navigate to Error page
  }

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
            <ChartActivity data={activities} />
          </div>
          <div className="miniCharts">
            <div className="miniCharts__chart averageDuration">
              <ChartAverageDuration data={sessions} />
            </div>
            <div className="miniCharts__chart performances">
              <ChartPerformances data={performances} />
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
