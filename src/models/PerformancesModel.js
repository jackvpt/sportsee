export default class PerformancesModel {
  constructor({ data }) {
    this.userId = data.userId,
    this.kind = data.kind
    this.data = data.data.map((data) => ({
      value: data.value,
      kind: data.kind
    }))
  }
}
