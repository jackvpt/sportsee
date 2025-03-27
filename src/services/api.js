import UserModel from "../models/UserModel"
import SessionsModel from "../models/SessionsModel"
import ActivitiesModel from "../models/ActivitiesModel"
import PerformancesModel from "../models/PerformancesModel"

/**
 * Fetches a user by their ID from the local API.
 * If no data is found, it falls back to fetching mock data.
 * @async
 * @function fetchUserByUserID
 * @param {string} userId - The ID of the user to retrieve.
 * @returns {Promise<UserModel>} A promise resolving to a UserModel instance containing the user's data.
 * @throws {Error} Throws an error if both fetch attempts fail.
 */
export async function fetchUserByUserID(userId) {
  try {
    // Attempt to fetch from local API
    const response = await fetch(`http://localhost:3000/user/${userId}`)
    // If the response is not OK, throw an error
    if (!response.ok)
      throw new Error(`Request failed with status: ${response.status}`)
    const data = await response.json()

    // If the API returns an empty response or user is not found, fallback to mock data
    if (!data || (Array.isArray(data) && data.length === 0)) {
      console.warn(
        `User ${userId} not found in local API. Fetching from mock data.`
      )
      return fetchMockUser(userId)
    }
    console.log("User data from API >>>", data)
    return new UserModel({ data: data.data })
  } catch (error) {
    console.error(`Error fetching user data from local API: ${error.message}`)
    return fetchMockUser(userId) // Fallback to mock data
  }
}

/**
 * Fetches a user from mock data if not found in the local API.
 * @async
 * @function fetchMockUser
 * @param {string} userId - The ID of the user to retrieve.
 * @returns {Promise<UserModel>} A promise resolving to a UserModel instance containing the user's data.
 * @throws {Error} Throws an error if the mock data request fails.
 */
async function fetchMockUser(userId) {
  try {
    const response = await fetch("/__mocks__/users.json")
    if (!response.ok) throw new Error("Mock data request failed")
    const data = await response.json()
    const user = data.find((user) => user.id === userId)

    if (!user) throw new Error(`User ${userId} not found in mock data.`)
    console.log("User data from mock >>>", data)

    return new UserModel({ data: user })
  } catch (error) {
    console.error(`Error fetching user data from mock data: ${error.message}`)
    throw error
  }
}

/**
 * Fetches a user sessions by their ID from the local API.
 * If no data is found, it falls back to fetching mock data.
 * @async
 * @function fetchSessionsByUserId
 * @param {string} userId - The ID of the user to retrieve.
 * @returns {Promise<SessionsModel>} A promise resolving to a SessionModel instance containing the user's data.
 * @throws {Error} Throws an error if both fetch attempts fail.
 */
export async function fetchSessionsByUserId(userId) {
  try {
    // Attempt to fetch from local API
    const response = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    )
    // If the response is not OK, throw an error
    if (!response.ok)
      throw new Error(`Request failed with status: ${response.status}`)
    const data = await response.json()

    // If the API returns an empty response or user is not found, fallback to mock data
    if (!data || (Array.isArray(data) && data.length === 0)) {
      console.warn(
        `User ${userId} not found in local API. Fetching from mock data.`
      )
      return fetchMockSessions(userId)
    }
    console.log("Sessions data from API >>>", data)
    return new SessionsModel({ data: data.data })
  } catch (error) {
    console.error(
      `Error fetching user sessions from local API: ${error.message}`
    )
    return fetchMockSessions(userId) // Fallback to mock data
  }
}

/**
 * Fetches a user sessions from mock data if not found in the local API.
 * @async
 * @function fetchMockSessions
 * @param {string} userId - The ID of the user to retrieve.
 * @returns {Promise<SessionsModel>} A promise resolving to a UserModel instance containing the user's data.
 * @throws {Error} Throws an error if the mock data request fails.
 */
async function fetchMockSessions(userId) {
  try {
    const response = await fetch("/__mocks__/sessions.json")
    if (!response.ok) throw new Error("Mock data request failed")
    const data = await response.json()
    const sessions = data.find((session) => session.userId === userId)

    if (!sessions) throw new Error(`User ${userId} not found in mock data.`)
    console.log("Sessions data from mock >>>", data)

    return new SessionsModel({ data: sessions })
  } catch (error) {
    console.error(
      `Error fetching user sessions from mock data: ${error.message}`
    )
    throw error
  }
}

/**
 * Fetches a user sessions by their ID from the local API.
 * If no data is found, it falls back to fetching mock data.
 * @async
 * @function fetchActivitiesByUserId
 * @param {string} userId - The ID of the user to retrieve.
 * @returns {Promise<ActivitiesModel>} A promise resolving to a ActivitiesModel instance containing the user's data.
 * @throws {Error} Throws an error if both fetch attempts fail.
 */
export async function fetchActivitiesByUserId(userId) {
  try {
    // Attempt to fetch from local API
    const response = await fetch(
      `http://localhost:3000/user/${userId}/activity`
    )
    // If the response is not OK, throw an error
    if (!response.ok)
      throw new Error(`Request failed with status: ${response.status}`)
    const data = await response.json()

    // If the API returns an empty response or user is not found, fallback to mock data
    if (!data || (Array.isArray(data) && data.length === 0)) {
      console.warn(
        `User ${userId} not found in local API. Fetching from mock data.`
      )
      return fetchMockActivities(userId)
    }
    console.log("Activities data from API >>>", data)
    return new ActivitiesModel({ data: data.data })
  } catch (error) {
    console.error(
      `Error fetching user activities from local API: ${error.message}`
    )
    return fetchMockActivities(userId) // Fallback to mock data
  }
}

/**
 * Fetches a user sessions from mock data if not found in the local API.
 * @async
 * @function fetchMockActivities
 * @param {string} userId - The ID of the user to retrieve.
 * @returns {Promise<ActivitiesModel>} A promise resolving to a ActivitiesModel instance containing the user's data.
 * @throws {Error} Throws an error if the mock data request fails.
 */
async function fetchMockActivities(userId) {
  try {
    const response = await fetch("/__mocks__/activities.json")
    if (!response.ok) throw new Error("Mock data request failed")
    const data = await response.json()
    const activities = data.find((activity) => activity.userId === userId)

    if (!activities) throw new Error(`User ${userId} not found in mock data.`)
    console.log("Activities data from mock >>>", data)

    return new ActivitiesModel({ data: activities })
  } catch (error) {
    console.error(
      `Error fetching user activities from mock data: ${error.message}`
    )
    throw error
  }
}

/**
 * Fetches a user performances by their ID from the local API.
 * If no data is found, it falls back to fetching mock data.
 * @async
 * @function fetchPerformancesByUserId
 * @param {string} userId - The ID of the user to retrieve.
 * @returns {Promise<PerformancesModel>} A promise resolving to a PerformancesModel instance containing the user's data.
 * @throws {Error} Throws an error if both fetch attempts fail.
 */
export async function fetchPerformancesByUserId(userId) {
  try {
    // Attempt to fetch from local API
    const response = await fetch(
      `http://localhost:3000/user/${userId}/performance`
    )
    // If the response is not OK, throw an error
    if (!response.ok)
      throw new Error(`Request failed with status: ${response.status}`)
    const data = await response.json()

    // If the API returns an empty response or user is not found, fallback to mock data
    if (!data || (Array.isArray(data) && data.length === 0)) {
      console.warn(
        `User ${userId} not found in local API. Fetching from mock data.`
      )
      return fetchMockPerformances(userId)
    }
    console.log("Performances data from API >>>", data)
    return new PerformancesModel({ data: data.data })
  } catch (error) {
    console.error(
      `Error fetching user performances from local API: ${error.message}`
    )
    return fetchMockPerformances(userId) // Fallback to mock data
  }
}

/**
 * Fetches a user performances from mock data if not found in the local API.
 * @async
 * @function fetchMockPerformances
 * @param {string} userId - The ID of the user to retrieve.
 * @returns {Promise<PerformancesModel>} A promise resolving to a PerformancesModel instance containing the user's data.
 * @throws {Error} Throws an error if the mock data request fails.
 */
async function fetchMockPerformances(userId) {
  try {
    const response = await fetch("/__mocks__/performances.json")
    if (!response.ok) throw new Error("Mock data request failed")
    const data = await response.json()
    const performances = data.find((performance) => performance.userId === userId)

    if (!performances) throw new Error(`User ${userId} not found in mock data.`)
    console.log("Performances data from mock >>>", data)

    return new PerformancesModel({ data: performances })
  } catch (error) {
    console.error(
      `Error fetching user performances from mock data: ${error.message}`
    )
    throw error
  }
}
