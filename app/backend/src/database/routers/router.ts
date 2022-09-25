import { Router } from 'express';

import UserController from '../controllers/userController';
import TeamController from '../controllers/teamController';
import MatchController from '../controllers/matchController';
import LeaderboardController from '../controllers/leaderboardController';
import verifyToken from '../middlewares/tokenValidate';

const router = Router();

router.post('/login', UserController.login);
router.get('/login/validate', UserController.veryfyToken);
router.get('/teams', TeamController.getAllTeams);
router.get('/teams/:id', TeamController.getTeamById);
router.get('/matches', MatchController.getAllMatches);
router.post('/matches', verifyToken.verifyToken, MatchController.createMatch);
router.patch('/matches/:id', MatchController.updateMatch);
router.patch('/matches/:id/finish', MatchController.updateFinish);
router.get('/leaderboard/home', LeaderboardController.getLeaderboardHome);
router.get('/leaderboard/away', LeaderboardController.getLeaderboardAway);
router.get('/leaderboard', LeaderboardController.getLeaderboard);

export default router;
