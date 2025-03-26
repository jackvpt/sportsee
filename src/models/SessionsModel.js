/**
 * Represents a user's session data.
 */
export default class SessionsModel {
  /**
   * Creates an instance of SessionsModel.
   * 
   * @param {Object} data - The session data.
   * @param {number} data.userId - The ID of the user.
   * @param {Array<{ day: string, sessionLength: number }>} data.sessions - The user's session details.
   */
  constructor({ data }) {
    /**
     * The ID of the user.
     * @type {number}
     */
    this.userId = data.userId

    /**
     * An array of session details.
     * @type {Array<{ day: string, sessionLength: number }>}
     */
    this.sessions = data.sessions.map((session) => ({
      day: session.day,
      sessionLength: session.sessionLength,
    }))
  }
}
