/**
 * Represents a user's activity sessions.
 */
export default class ActivitiesModel {
  /**
   * Creates an instance of ActivitiesModel.
   * 
   * @param {Object} data - The activity data.
   * @param {number} data.userId - The ID of the user.
   * @param {Array<{ day: string, kilogram: number, calories: number }>} data.sessions - The user's activity sessions.
   */
  constructor({ data }) {
    /**
     * The ID of the user.
     * @type {number}
     */
    this.userId = data.userId

    /**
     * An array of activity sessions.
     * @type {Array<{ day: string, kilogram: number, calories: number }>}
     */
    this.sessions = data.sessions.map((session) => ({
      day: session.day,
      kilogram: session.kilogram,
      calories: session.calories
    }))
  }
}
