import React from "react"
import "./Profile.scss"
import { useParams, Navigate } from "react-router"
import { useFetch } from "../../utils/useFetch"
import ChartActivity from "../../components/ChartActivity/ChartActivity"
import ChartAverageDuration from "../../components/ChartAverageDuration/ChartAverageDuration"

const Profile = () => {
  // Get id from Home page
  const { userId } = useParams()

  // Fetch call returns 'data', 'isLoading' and 'error'
  const fetchUsers = useFetch("/__mocks__/users.json")
  const fetchActivities = useFetch("/__mocks__/activities.json")
  const fetchPerformances = useFetch("/__mocks__/performances.json")
  const fetchSessions = useFetch("/__mocks__/sessions.json")

  // Check if fetch isLoading or if error
  if (
    fetchUsers.isLoading ||
    fetchActivities.isLoading ||
    fetchPerformances.isLoading ||
    fetchSessions.isLoading
  ) {
    return
  }

  if (
    fetchUsers.error ||
    fetchActivities.error ||
    fetchPerformances.error ||
    fetchSessions.error
  ) {
    return <Navigate to="*" /> // Navigate to Error page
  }

  // Get data from fetch
  const users = fetchUsers.data
  let user
  const activities = fetchActivities.data
  let activity
  const performances = fetchPerformances.data
  let performance
  const sessions = fetchSessions.data
  let session

  // Get user based on id
  if (users) {
    user = users.find((element) => String(element.id) === userId)
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
  if (sessions) {
    session = sessions.find((element) => element.userId === user.id)
  }

  const userInfos = user.userInfos

  return (
    <article>
      <div>
        <h1>
          Bonjour
          <span className="userFirstName"> {userInfos.firstName}</span>
        </h1>
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      </div>
      <div className="container__dashboard">
        <div className="container__dashboard__charts">
          <div className="container__dashboard__charts__dailyActivity">
            <ChartActivity data={activity} />
          </div>
          <div className="container__dashboard__charts__miniCharts"></div>
          <div className="container__dashboard__charts__miniCharts__averageDuration">
            <ChartAverageDuration data={session.sessions} />
          </div>
        </div>
        <div className="container__dashboard__keyNumbers"></div>
      </div>
    </article>
  )
}

export default Profile
