const leaderboardHomeQuery = `SELECT  th.team_name AS name, 
(SUM(m.home_team_goals > m.away_team_goals)*3 
  + SUM(m.home_team_goals = m.away_team_goals)) AS totalPoints,
COUNT(m.home_team) AS totalGames,
SUM(m.home_team_goals > m.away_team_goals) AS totalVictories,
SUM(m.home_team_goals = m.away_team_goals) AS totalDraws,
SUM(m.home_team_goals < m.away_team_goals) AS totalLosses,
SUM(m.home_team_goals) as goalsFavor,
SUM(m.away_team_goals) as goalsOwn,
(SUM(m.home_team_goals) - SUM(m.away_team_goals)) as goalsBalance,
FORMAT(
  ((SUM(m.home_team_goals > m.away_team_goals) * 3 + SUM(m.home_team_goals = m.away_team_goals))
    / (COUNT(m.home_team) * 3 )) * 100, 2) as efficiency
FROM matches AS m 
LEFT JOIN  teams AS th 
ON m.home_team = th.id
WHERE m.in_progress = 0
GROUP BY th.id
ORDER BY totalPoints DESC,
totalVictories DESC,
goalsBalance DESC,
goalsFavor DESC,
goalsOwn ASC;`;

const leaderboardAwayQuery = `SELECT  ta.team_name AS name, 
(SUM(m.home_team_goals < m.away_team_goals)*3 
+ SUM(m.home_team_goals = m.away_team_goals)) AS totalPoints,
COUNT(m.away_team) AS totalGames,
SUM(m.home_team_goals < m.away_team_goals) AS totalVictories,
SUM(m.home_team_goals = m.away_team_goals) AS totalDraws,
SUM(m.home_team_goals > m.away_team_goals) AS totalLosses,
SUM(m.away_team_goals) as goalsFavor,
SUM(m.home_team_goals) as goalsOwn,
(SUM(m.away_team_goals) - SUM(m.home_team_goals)) as goalsBalance,
FORMAT(
  ((SUM(m.home_team_goals < m.away_team_goals) * 3 + SUM(m.home_team_goals = m.away_team_goals))
    / (COUNT(m.away_team) * 3 )) * 100, 2) as efficiency
FROM matches AS m 
LEFT JOIN  teams AS ta 
ON m.away_team = ta.id
WHERE m.in_progress = 0
GROUP BY ta.id
ORDER BY totalPoints DESC,
totalVictories DESC,
goalsBalance DESC,
goalsFavor DESC,
goalsOwn ASC;`;

export { leaderboardHomeQuery, leaderboardAwayQuery };
