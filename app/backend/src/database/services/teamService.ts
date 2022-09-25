import { NextFunction } from 'express';
import Team from '../models/teamModel';

export interface ITeam {
  id: number;
  teamName: string;
}

export default class TeamService {
  static async getAllTeams(): Promise<ITeam[]> {
    const allTeam = await Team.findAll({ raw: true });
    return allTeam;
  }

  static async getTeamById(id: number, next: NextFunction) {
    const team = await Team.findOne({ where: { id }, raw: true });
    if (!team) {
      return next({ statusCode: 401, message: 'Team not found' });
    }
    return team;
  }
}
