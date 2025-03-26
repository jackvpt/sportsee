export default class UserModel {
  constructor({ data }) {
    this.id = data.id
    this.firstName = data.userInfos.firstName
    this.lastName = data.userInfos.lastName
    this.age = data.userInfos.age
    this.score = data.todayScore ? data.todayScore : data.score
    this.calorieCount = data.keyData.calorieCount
    this.proteinCount = data.keyData.proteinCount
    this.carbohydrateCount = data.keyData.carbohydrateCount
    this.lipidCount = data.keyData.lipidCount
  }
}
