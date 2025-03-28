import React, { useState, useEffect } from "react"
import "./Profile.scss"
import { useParams, Navigate } from "react-router-dom"
import {
  fetchUserByUserID,
  fetchSessionsByUserId,
  fetchActivitiesByUserId,
  fetchPerformancesByUserId,
} from "../../services/api"
import ChartActivity from "../../components/ChartActivity/ChartActivity"
import ChartAverageDuration from "../../components/ChartAverageDuration/ChartAverageDuration"
import ChartPerformances from "../../components/ChartPerformances/ChartPerformances"
import ChartScore from "../../components/ChartScore/ChartScore"
import KeyDataCard from "../../components/KeyDataCard/KeyDataCard"
import Loader from "../../components/Loader/Loader"

/**
 * Profile page displaying user's performance, activity, and nutrition data.
 *
 * @component
 * @returns {JSX.Element} The profile page with charts and key data.
 */
const Profile = () => {
  // Get id from URL
  let { userId } = useParams()
  userId = Number(userId)

  const [user, setUser] = useState(null)
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
        const [userData, sessionsData, activitiesData, performancesData] =
          await Promise.all([
            fetchUserByUserID(userId),
            fetchSessionsByUserId(userId),
            fetchActivitiesByUserId(userId),
            fetchPerformancesByUserId(userId),
          ])
        setUser(userData)
        setSessions(sessionsData.sessions)
        setActivities(activitiesData.sessions)
        setPerformances(performancesData)
      } catch (error) {
        setIsError(true)
        console.error("Erreur de chargement des données :", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [userId])

  if (isLoading) return <Loader /> // Display loader while data is loading
  if (isError) return <p>❌ Une erreur est survenue lors du chargement.</p>
  if (!user) return <Navigate to="*" /> // Navigate to Error page if user not found

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
