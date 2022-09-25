export interface IMatch {
  homeTeam: number;
  awayTeam: number;
}

export interface IMatchId extends IMatch {
  id: number;
}

export interface IMatchInProgress extends IMatch {
  inProgress: boolean;
}

export interface ICreateMatch {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number,
  awayTeamGoals: number,
}

export interface IGoals {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IMatchInProgressId extends IMatchInProgress, IMatchId {}

export interface Irow {
  name: string,
  totalPoints: string | number,
  totalGames: string | number,
  totalVictories: string | number,
  totalDraws: string | number,
  totalLosses: string | number,
  goalsFavor: string | number,
  goalsOwn: string | number,
  goalsBalance: string | number,
  efficiency: string | number,
}
export type ILeader = Array<Irow>;

export interface IL {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: string | number,
}

export type ILb = Array<IL>;
