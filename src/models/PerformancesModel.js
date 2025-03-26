/**
 * Represents a user's performance data.
 */
export default class PerformancesModel {
  /**
   * Creates an instance of PerformancesModel.
   * 
   * @param {Object} data - The performance data.
   * @param {number} data.userId - The ID of the user.
   * @param {Object} data.kind - An object mapping kind IDs to their corresponding labels.
   * @param {Array<{ value: number, kind: number }>} data.data - The performance data array.
   */
  constructor({ data }) {
    /**
     * The ID of the user.
     * @type {number}
     */
    this.userId = data.userId

    /**
     * An object mapping kind IDs to their corresponding labels.
     * @type {Object.<number, string>}
     */
    this.kind = data.kind

    /**
     * An array of performance data objects.
     * @type {Array<{ value: number, kind: number }>}
     */
    this.data = data.data.map((data) => ({
      value: data.value,
      kind: data.kind
    }))
  }
}
