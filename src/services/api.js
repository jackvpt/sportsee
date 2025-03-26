import UserModel from "../models/UserModel"
import SessionModel from "../models/SessionModel"

export async function fetchUsers() {
  const response = await fetch("/__mocks__/users.json")
  const data = await response.json()
  return data.map((user) => new UserModel({ data: user }))
}

export async function fetchSessionsByUserId(userId) {
  const response = await fetch("/__mocks__/sessions.json")
  const data = await response.json()
  const sessionsByUserId = data.find((element) => element.userId === userId)
  return new SessionModel({ data: sessionsByUserId })
}
