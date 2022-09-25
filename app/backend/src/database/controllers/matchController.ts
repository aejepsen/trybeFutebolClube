import { NextFunction, Request, Response } from 'express';
import MatchService from '../services/matchService';

const errorCreate = [
  {
    statusCode: 401,
    message: 'It is not possible to create a match with two equal teams',
  },
  {
    statusCode: 404,
    message: 'There is no team with such id!',
  },
];

export default class MatchController {
  static async getAllMatches(req: Request, res: Response, next: NextFunction) {
    const { inProgress } = req.query;
    if (inProgress !== undefined) {
      const matches = await MatchService.getAllMatchesInProgress(inProgress === 'true', next);
      return res.status(200).json(matches);
    }
    const allMatches = await MatchService.getAllMatches(next);
    res.status(200).json(allMatches);
  }

  static async createMatch(req: Request, res: Response, next: NextFunction) {
    const { homeTeam, awayTeam } = req.body;
    if (homeTeam === awayTeam) {
      return next(errorCreate[0]);
    }
    const existTeam = await MatchService.validateTeam(req);
    if (!existTeam) {
      return next(errorCreate[1]);
    }
    const match = await MatchService.createMatch(req.body);
    res.status(201).json(match);
  }

  static async updateMatch(req: Request, res: Response) {
    const { id } = req.params;
    const match = await MatchService.updateMatch(+id, req.body);
    res.status(200).json(match);
  }

  static async updateFinish(req: Request, res: Response) {
    const { id } = req.params;
    await MatchService.updateFinish(+id);
    res.status(200).json({ message: 'finished' });
  }
}
