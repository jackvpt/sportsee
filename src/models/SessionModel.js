export default class SessionModel {
  constructor({ data }) {
    this.userId = data.userId
    this.sessions = data.sessions.map((session) => ({
      day: session.day,
      sessionLength: session.sessionLength,
    }))
  }
}
