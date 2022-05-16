export default class Team {
  constructor(team) {
    this.innerTeam = team;
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.innerTeam.length; i += 1) {
      yield this.innerTeam[i];
    }
  }
}
