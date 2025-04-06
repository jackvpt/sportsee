/**
 * Represents a user profile with personal and health-related data.
 */
export default class UserModel {
  /**
   * Creates an instance of UserModel.
   *
   * @param {Object} data - The user data.
   * @param {number} data.id - The ID of the user.
   * @param {Object} data.userInfos - The user's personal information.
   * @param {string} data.userInfos.firstName - The user's first name.
   * @param {string} data.userInfos.lastName - The user's last name.
   * @param {number} data.userInfos.age - The user's age.
   * @param {number} [data.todayScore] - The user's score for today (optional).
   * @param {number} [data.score] - The user's general score (optional, used if `todayScore` is missing).
   * @param {Object} data.keyData - The user's key health metrics.
   * @param {number} data.keyData.calorieCount - The number of calories consumed.
   * @param {number} data.keyData.proteinCount - The amount of proteins in grams.
   * @param {number} data.keyData.carbohydrateCount - The amount of carbohydrates in grams.
   * @param {number} data.keyData.lipidCount - The amount of lipids in grams.
   */
  constructor({ data }) {
    /**
     * The ID of the user.
     * @type {number}
     */
    this.id = data.id

    /**
     * The user's first name.
     * @type {string}
     */
    this.firstName = data.userInfos.firstName

    /**
     * The user's last name.
     * @type {string}
     */
    this.lastName = data.userInfos.lastName

    /**
     * The user's age.
     * @type {number}
     */
    this.age = data.userInfos.age

    /**
     * The user's score for today or general score if `todayScore` is unavailable.
     * @type {number}
     */
    this.score = data.todayScore ? data.todayScore : data.score

    /**
     * The number of calories consumed.
     * @type {number}
     */
    this.calorieCount = data.keyData.calorieCount

    /**
     * The amount of proteins in grams.
     * @type {number}
     */
    this.proteinCount = data.keyData.proteinCount

    /**
     * The amount of carbohydrates in grams.
     * @type {number}
     */
    this.carbohydrateCount = data.keyData.carbohydrateCount

    /**
     * The amount of lipids in grams.
     * @type {number}
     */
    this.lipidCount = data.keyData.lipidCount
  }
}
