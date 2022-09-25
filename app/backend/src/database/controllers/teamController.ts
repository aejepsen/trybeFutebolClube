import { NextFunction, Request, Response } from 'express';
import TeamService from '../services/teamService';

export default class TeamController {
  static async getAllTeams(_req: Request, res: Response) {
    const allTeam = await TeamService.getAllTeams();
    res.status(200).send(allTeam);
  }

  static async getTeamById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const team = await TeamService.getTeamById(Number(id), next);
    res.status(200).send(team);
  }
}
