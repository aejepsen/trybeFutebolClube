import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

export default class LeaderboardController {
  static async getLeaderboardHome(_req: Request, res: Response) {
    const scoreBoard = await LeaderboardService.getLeaderboardHome();
    res.status(200).json(scoreBoard);
  }

  static async getLeaderboardAway(_req: Request, res: Response) {
    const scoreBoard = await LeaderboardService.getLeaderboardAway();
    res.status(200).json(scoreBoard);
  }

  static async getLeaderboard(_req: Request, res: Response) {
    const scoreBoard = await LeaderboardService.getLeaderboard();
    res.status(200).json(scoreBoard);
  }
}
