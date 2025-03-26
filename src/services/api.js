import UserModel from "../models/UserModel"
import SessionsModel from "../models/SessionsModel"
import ActivitiesModel from "../models/ActivitiesModel"
import PerformancesModel from "../models/PerformancesModel"

/**
 * Fetches the list of users from the mock API and maps the data to UserModel instances.
 * 
 * @async
 * @returns {Promise<UserModel[]>} A promise resolving to an array of UserModel instances.
 * @throws {Error} Throws an error if the request fails.
 */
export async function fetchUsers() {
  const response = await fetch("/__mocks__/users.json")
  const data = await response.json()
  return data.map((user) => new UserModel({ data: user }))
}

/**
 * Fetches user sessions by user ID from the mock API.
 * 
 * @async
 * @param {number} userId - The ID of the user.
 * @returns {Promise<SessionsModel>} A promise resolving to a SessionsModel instance.
 * @throws {Error} Throws an error if the request fails or no data is found.
 */
export async function fetchSessionsByUserId(userId) {
  const response = await fetch("/__mocks__/sessions.json")
  const data = await response.json()
  const sessionsByUserId = data.find((element) => element.userId === userId)
  return new SessionsModel({ data: sessionsByUserId })
}

/**
 * Fetches user activities by user ID from the mock API.
 * 
 * @async
 * @param {number} userId - The ID of the user.
 * @returns {Promise<ActivitiesModel>} A promise resolving to an ActivitiesModel instance.
 * @throws {Error} Throws an error if the request fails or no data is found.
 */
export async function fetchActivitiesByUserId(userId) {
  const response = await fetch("/__mocks__/activities.json")
  const data = await response.json()
  const activitiesByUserId = data.find((element) => element.userId === userId)
  return new ActivitiesModel({ data: activitiesByUserId })
}

/**
 * Fetches user performance data by user ID from the mock API.
 * 
 * @async
 * @param {number} userId - The ID of the user.
 * @returns {Promise<PerformancesModel>} A promise resolving to a PerformancesModel instance.
 * @throws {Error} Throws an error if the request fails or no data is found.
 */
export async function fetchPerformancesByUserId(userId) {
  const response = await fetch("/__mocks__/performances.json")
  const data = await response.json()
  const performancesByUserId = data.find((element) => element.userId === userId)
  return new PerformancesModel({ data: performancesByUserId })
}
