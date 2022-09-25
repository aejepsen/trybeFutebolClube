import { NextFunction, Request } from 'express';
import Teams from '../models/teamModel';
import Match from '../models/matchModel';
import { ICreateMatch, IMatchInProgressId, IGoals } from '../interfaces/interfaces';

const error = 'statusCode: 404, message: "Match not found"';

export default class MatchService {
  static getHomeAwayTeamNames = async (match: IMatchInProgressId) => {
    const teamHome = await Teams.findOne({
      where: { id: match.homeTeam },
      attributes: ['teamName'],
    });
    const teamAway = await Teams.findOne({
      where: { id: match.awayTeam },
      attributes: ['teamName'],
    });
    return {
      ...match,
      inProgress: !!match.inProgress,
      teamHome,
      teamAway,
    };
  };

  static async getAllMatches(next: NextFunction) {
    const allMatches = await Match.findAll({ raw: true });
    if (!allMatches) {
      return next({ error });
    }
    const allMatchesReadme = await Promise.all(allMatches.map(MatchService.getHomeAwayTeamNames));
    return allMatchesReadme;
  }

  static async getAllMatchesInProgress(progress: boolean, next: NextFunction) {
    const matchesInProgress = await Match.findAll({ where: { inProgress: progress }, raw: true });
    if (!matchesInProgress) {
      return next({ error });
    }
    const allMatchesReadme = await Promise.all(matchesInProgress
      .map(MatchService.getHomeAwayTeamNames));
    return allMatchesReadme;
  }

  static async createMatch(match: ICreateMatch) {
    const newMatch = await Match.create({
      ...match, inProgress: true,
    });
    return newMatch;
  }

  static async validateTeam(req: Request) {
    const { homeTeam, awayTeam } = req.body;
    const teamA = await Teams.findOne({ where: { id: homeTeam } });
    const teamB = await Teams.findOne({ where: { id: awayTeam } });
    return teamA && teamB;
  }

  static async updateMatch(id: number, gols: IGoals) {
    const { homeTeamGoals, awayTeamGoals } = gols;
    const match = await Match.findOne({ where: { id } });
    if (!match) { return { error }; }
    const updatedMatch = await Match.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return updatedMatch;
  }

  static async updateFinish(id: number) {
    const match = await Match.findOne({ where: { id } });
    if (!match) { return { error }; }
    const updatedMatch = await Match.update({ inProgress: false }, { where: { id } });
    return updatedMatch;
  }
}
