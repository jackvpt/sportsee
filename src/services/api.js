import UserModel from "../models/UserModel"
import SessionsModel from "../models/SessionsModel"
import ActivitiesModel from "../models/ActivitiesModel"
import PerformancesModel from "../models/PerformancesModel"

export async function fetchUsers() {
  const response = await fetch("/__mocks__/users.json")
  const data = await response.json()
  return data.map((user) => new UserModel({ data: user }))
}

export async function fetchSessionsByUserId(userId) {
  const response = await fetch("/__mocks__/sessions.json")
  const data = await response.json()
  const sessionsByUserId = data.find((element) => element.userId === userId)
  return new SessionsModel({ data: sessionsByUserId })
}

export async function fetchActivitiesByUserId(userId) {
  const response = await fetch("/__mocks__/activities.json")
  const data = await response.json()
  const activitiesByUserId = data.find((element) => element.userId === userId)
  return new ActivitiesModel({ data: activitiesByUserId })
}

export async function fetchPerformancesByUserId(userId) {
  const response = await fetch("/__mocks__/performances.json")
  const data = await response.json()
  const performancesByUserId = data.find((element) => element.userId === userId)
  return new PerformancesModel({ data: performancesByUserId })
}
