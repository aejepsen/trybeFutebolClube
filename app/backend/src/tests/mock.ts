export const adminUser = {
  id: 1, 
  username: 'Admin', 
  role: 'admin', 
  email: 'admin@admin.com', 
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW' };
  // senha: secret_admin

export const arrayTeams = [
  {
    "id": 1,
    "teamName": "Botafogo"
  },
  {
    "id": 2,
    "teamName": "Santos"
  },
  {
    "id": 3,
    "teamName": "Palmeiras"
  }
]

  export const scoreBoard = [
  {
    "name": "São Paulo",
    "totalPoints": "12",
    "totalGames": 4,
    "totalVictories": "4",
    "totalDraws": "0",
    "totalLosses": "0",
    "goalsFavor": "8",
    "goalsOwn": "1",
    "goalsBalance": "7",
    "efficiency": "100.00"
  },
  {
    "name": "Palmeiras",
    "totalPoints": "0",
    "totalGames": 4,
    "totalVictories": "0",
    "totalDraws": "0",
    "totalLosses": "4",
    "goalsFavor": "0",
    "goalsOwn": "5",
    "goalsBalance": "-5",
    "efficiency": "0,00"
  },
    {
      "name": "Santos",
      "totalPoints": "6",
      "totalGames": 2,
      "totalVictories": "2",
      "totalDraws": "0",
      "totalLosses": "0",
      "goalsFavor": "9",
      "goalsOwn": "3",
      "goalsBalance": "6",
      "efficiency": "100.00"
    },
  {
    "name": "Corinthians",
    "totalPoints": "6",
    "totalGames": 2,
    "totalVictories": "2",
    "totalDraws": "0",
    "totalLosses": "0",
    "goalsFavor": "6",
    "goalsOwn": "1",
    "goalsBalance": "5",
    "efficiency": "100.00"
  },
  {
    "name": "Grêmio",
    "totalPoints": "6",
    "totalGames": 2,
    "totalVictories": "2",
    "totalDraws": "0",
    "totalLosses": "0",
    "goalsFavor": "4",
    "goalsOwn": "1",
    "goalsBalance": "3",
    "efficiency": "100.00"
  },
  {
    "name": "Real Brasília",
    "totalPoints": "6",
    "totalGames": 2,
    "totalVictories": "2",
    "totalDraws": "0",
    "totalLosses": "0",
    "goalsFavor": "2",
    "goalsOwn": "0",
    "goalsBalance": "2",
    "efficiency": "100.00"
  },
  {
    "name": "Internacional",
    "totalPoints": "4",
    "totalGames": 3,
    "totalVictories": "1",
    "totalDraws": "1",
    "totalLosses": "1",
    "goalsFavor": "4",
    "goalsOwn": "6",
    "goalsBalance": "-2",
    "efficiency": "44.44"
  },
  {
    "name": "Minas Brasília",
    "totalPoints": "4",
    "totalGames": 4,
    "totalVictories": "1",
    "totalDraws": "1",
    "totalLosses": "2",
    "goalsFavor": "4",
    "goalsOwn": "6",
    "goalsBalance": "-2",
    "efficiency": "33.33"
  },
  {
    "name": "Botafogo",
    "totalPoints": "4",
    "totalGames": 3,
    "totalVictories": "1",
    "totalDraws": "1",
    "totalLosses": "1",
    "goalsFavor": "2",
    "goalsOwn": "4",
    "goalsBalance": "-2",
    "efficiency": "44.44"
  },
  {
    "name": "Ferroviária",
    "totalPoints": "3",
    "totalGames": 2,
    "totalVictories": "1",
    "totalDraws": "0",
    "totalLosses": "1",
    "goalsFavor": "3",
    "goalsOwn": "2",
    "goalsBalance": "1",
    "efficiency": "50.00"
  },
  {
    "name": "Napoli-SC",
    "totalPoints": "2",
    "totalGames": 2,
    "totalVictories": "0",
    "totalDraws": "2",
    "totalLosses": "0",
    "goalsFavor": "2",
    "goalsOwn": "2",
    "goalsBalance": "0",
    "efficiency": "33.33"
  },
  {
    "name": "Cruzeiro",
    "totalPoints": "1",
    "totalGames": 2,
    "totalVictories": "0",
    "totalDraws": "1",
    "totalLosses": "1",
    "goalsFavor": "2",
    "goalsOwn": "3",
    "goalsBalance": "-1",
    "efficiency": "16.67"
  },
  {
    "name": "Flamengo",
    "totalPoints": "1",
    "totalGames": 2,
    "totalVictories": "0",
    "totalDraws": "1",
    "totalLosses": "1",
    "goalsFavor": "1",
    "goalsOwn": "2",
    "goalsBalance": "-1",
    "efficiency": "16.67"
  },
  {
    "name": "Avaí/Kindermann",
    "totalPoints": "1",
    "totalGames": 3,
    "totalVictories": "0",
    "totalDraws": "1",
    "totalLosses": "2",
    "goalsFavor": "3",
    "goalsOwn": "7",
    "goalsBalance": "-4",
    "efficiency": "11.11"
  },
  {
    "name": "São José-SP",
    "totalPoints": "0",
    "totalGames": 3,
    "totalVictories": "0",
    "totalDraws": "0",
    "totalLosses": "3",
    "goalsFavor": "2",
    "goalsOwn": "5",
    "goalsBalance": "-3",
    "efficiency": "0.00"
  },
  {
    "name": "Bahia",
    "totalPoints": "0",
    "totalGames": 3,
    "totalVictories": "0",
    "totalDraws": "0",
    "totalLosses": "3",
    "goalsFavor": "0",
    "goalsOwn": "4",
    "goalsBalance": "-4",
    "efficiency": "0.00"
  }
]

export const matches = [
	{
		"id": 1,
		"homeTeam": 16,
		"homeTeamGoals": 1,
		"awayTeam": 8,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "São Paulo"
		},
		"teamAway": {
			"teamName": "Grêmio"
		}
	},
	{
		"id": 2,
		"homeTeam": 9,
		"homeTeamGoals": 1,
		"awayTeam": 14,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Internacional"
		},
		"teamAway": {
			"teamName": "Santos"
		}
	},
	{
		"id": 3,
		"homeTeam": 4,
		"homeTeamGoals": 3,
		"awayTeam": 11,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"teamName": "Corinthians"
		},
		"teamAway": {
			"teamName": "Napoli-SC"
		}
	},
	{
		"id": 4,
		"homeTeam": 3,
		"homeTeamGoals": 0,
		"awayTeam": 2,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"teamName": "Botafogo"
		},
		"teamAway": {
			"teamName": "Bahia"
		}
	},
	{
		"id": 5,
		"homeTeam": 7,
		"homeTeamGoals": 1,
		"awayTeam": 10,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Flamengo"
		},
		"teamAway": {
			"teamName": "Minas Brasília"
		}
	},
	{
		"id": 6,
		"homeTeam": 5,
		"homeTeamGoals": 1,
		"awayTeam": 13,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Cruzeiro"
		},
		"teamAway": {
			"teamName": "Real Brasília"
		}
	},
	{
		"id": 7,
		"homeTeam": 12,
		"homeTeamGoals": 2,
		"awayTeam": 6,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"teamName": "Palmeiras"
		},
		"teamAway": {
			"teamName": "Ferroviária"
		}
	},
	{
		"id": 8,
		"homeTeam": 15,
		"homeTeamGoals": 0,
		"awayTeam": 1,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "São José-SP"
		},
		"teamAway": {
			"teamName": "Avaí/Kindermann"
		}
	},
	{
		"id": 9,
		"homeTeam": 1,
		"homeTeamGoals": 0,
		"awayTeam": 12,
		"awayTeamGoals": 3,
		"inProgress": false,
		"teamHome": {
			"teamName": "Avaí/Kindermann"
		},
		"teamAway": {
			"teamName": "Palmeiras"
		}
	},
	{
		"id": 10,
		"homeTeam": 2,
		"homeTeamGoals": 0,
		"awayTeam": 9,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"teamName": "Bahia"
		},
		"teamAway": {
			"teamName": "Internacional"
		}
	},
	{
		"id": 11,
		"homeTeam": 13,
		"homeTeamGoals": 1,
		"awayTeam": 3,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"teamName": "Real Brasília"
		},
		"teamAway": {
			"teamName": "Botafogo"
		}
	},
	{
		"id": 12,
		"homeTeam": 6,
		"homeTeamGoals": 0,
		"awayTeam": 4,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Ferroviária"
		},
		"teamAway": {
			"teamName": "Corinthians"
		}
	},
	{
		"id": 13,
		"homeTeam": 8,
		"homeTeamGoals": 2,
		"awayTeam": 5,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Grêmio"
		},
		"teamAway": {
			"teamName": "Cruzeiro"
		}
	},
	{
		"id": 14,
		"homeTeam": 14,
		"homeTeamGoals": 2,
		"awayTeam": 16,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Santos"
		},
		"teamAway": {
			"teamName": "São Paulo"
		}
	},
	{
		"id": 15,
		"homeTeam": 10,
		"homeTeamGoals": 0,
		"awayTeam": 15,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Minas Brasília"
		},
		"teamAway": {
			"teamName": "São José-SP"
		}
	},
	{
		"id": 16,
		"homeTeam": 11,
		"homeTeamGoals": 0,
		"awayTeam": 7,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"teamName": "Napoli-SC"
		},
		"teamAway": {
			"teamName": "Flamengo"
		}
	},
	{
		"id": 17,
		"homeTeam": 1,
		"homeTeamGoals": 2,
		"awayTeam": 8,
		"awayTeamGoals": 3,
		"inProgress": false,
		"teamHome": {
			"teamName": "Avaí/Kindermann"
		},
		"teamAway": {
			"teamName": "Grêmio"
		}
	},
	{
		"id": 18,
		"homeTeam": 12,
		"homeTeamGoals": 4,
		"awayTeam": 5,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"teamName": "Palmeiras"
		},
		"teamAway": {
			"teamName": "Cruzeiro"
		}
	},
	{
		"id": 19,
		"homeTeam": 11,
		"homeTeamGoals": 2,
		"awayTeam": 2,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"teamName": "Napoli-SC"
		},
		"teamAway": {
			"teamName": "Bahia"
		}
	},
	{
		"id": 20,
		"homeTeam": 7,
		"homeTeamGoals": 0,
		"awayTeam": 9,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Flamengo"
		},
		"teamAway": {
			"teamName": "Internacional"
		}
	},
	{
		"id": 21,
		"homeTeam": 6,
		"homeTeamGoals": 3,
		"awayTeam": 13,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Ferroviária"
		},
		"teamAway": {
			"teamName": "Real Brasília"
		}
	},
	{
		"id": 22,
		"homeTeam": 4,
		"homeTeamGoals": 3,
		"awayTeam": 3,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Corinthians"
		},
		"teamAway": {
			"teamName": "Botafogo"
		}
	},
	{
		"id": 23,
		"homeTeam": 15,
		"homeTeamGoals": 2,
		"awayTeam": 16,
		"awayTeamGoals": 3,
		"inProgress": false,
		"teamHome": {
			"teamName": "São José-SP"
		},
		"teamAway": {
			"teamName": "São Paulo"
		}
	},
	{
		"id": 24,
		"homeTeam": 10,
		"homeTeamGoals": 2,
		"awayTeam": 14,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"teamName": "Minas Brasília"
		},
		"teamAway": {
			"teamName": "Santos"
		}
	},
	{
		"id": 25,
		"homeTeam": 2,
		"homeTeamGoals": 0,
		"awayTeam": 6,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Bahia"
		},
		"teamAway": {
			"teamName": "Ferroviária"
		}
	},
	{
		"id": 26,
		"homeTeam": 13,
		"homeTeamGoals": 1,
		"awayTeam": 1,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"teamName": "Real Brasília"
		},
		"teamAway": {
			"teamName": "Avaí/Kindermann"
		}
	},
	{
		"id": 27,
		"homeTeam": 5,
		"homeTeamGoals": 1,
		"awayTeam": 15,
		"awayTeamGoals": 2,
		"inProgress": false,
		"teamHome": {
			"teamName": "Cruzeiro"
		},
		"teamAway": {
			"teamName": "São José-SP"
		}
	},
	{
		"id": 28,
		"homeTeam": 16,
		"homeTeamGoals": 3,
		"awayTeam": 7,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"teamName": "São Paulo"
		},
		"teamAway": {
			"teamName": "Flamengo"
		}
	},
	{
		"id": 29,
		"homeTeam": 9,
		"homeTeamGoals": 0,
		"awayTeam": 4,
		"awayTeamGoals": 4,
		"inProgress": false,
		"teamHome": {
			"teamName": "Internacional"
		},
		"teamAway": {
			"teamName": "Corinthians"
		}
	},
	{
		"id": 30,
		"homeTeam": 3,
		"homeTeamGoals": 0,
		"awayTeam": 12,
		"awayTeamGoals": 4,
		"inProgress": false,
		"teamHome": {
			"teamName": "Botafogo"
		},
		"teamAway": {
			"teamName": "Palmeiras"
		}
	},
	{
		"id": 31,
		"homeTeam": 8,
		"homeTeamGoals": 2,
		"awayTeam": 10,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"teamName": "Grêmio"
		},
		"teamAway": {
			"teamName": "Minas Brasília"
		}
	},
	{
		"id": 32,
		"homeTeam": 14,
		"homeTeamGoals": 5,
		"awayTeam": 11,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Santos"
		},
		"teamAway": {
			"teamName": "Napoli-SC"
		}
	},
	{
		"id": 33,
		"homeTeam": 1,
		"homeTeamGoals": 1,
		"awayTeam": 16,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Avaí/Kindermann"
		},
		"teamAway": {
			"teamName": "São Paulo"
		}
	},
	{
		"id": 34,
		"homeTeam": 9,
		"homeTeamGoals": 3,
		"awayTeam": 6,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Internacional"
		},
		"teamAway": {
			"teamName": "Ferroviária"
		}
	},
	{
		"id": 35,
		"homeTeam": 10,
		"homeTeamGoals": 1,
		"awayTeam": 5,
		"awayTeamGoals": 3,
		"inProgress": false,
		"teamHome": {
			"teamName": "Minas Brasília"
		},
		"teamAway": {
			"teamName": "Cruzeiro"
		}
	},
	{
		"id": 36,
		"homeTeam": 2,
		"homeTeamGoals": 0,
		"awayTeam": 7,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Bahia"
		},
		"teamAway": {
			"teamName": "Flamengo"
		}
	},
	{
		"id": 37,
		"homeTeam": 15,
		"homeTeamGoals": 0,
		"awayTeam": 13,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "São José-SP"
		},
		"teamAway": {
			"teamName": "Real Brasília"
		}
	},
	{
		"id": 38,
		"homeTeam": 14,
		"homeTeamGoals": 2,
		"awayTeam": 4,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Santos"
		},
		"teamAway": {
			"teamName": "Corinthians"
		}
	},
	{
		"id": 39,
		"homeTeam": 3,
		"homeTeamGoals": 2,
		"awayTeam": 11,
		"awayTeamGoals": 0,
		"inProgress": false,
		"teamHome": {
			"teamName": "Botafogo"
		},
		"teamAway": {
			"teamName": "Napoli-SC"
		}
	},
	{
		"id": 40,
		"homeTeam": 12,
		"homeTeamGoals": 4,
		"awayTeam": 8,
		"awayTeamGoals": 1,
		"inProgress": false,
		"teamHome": {
			"teamName": "Palmeiras"
		},
		"teamAway": {
			"teamName": "Grêmio"
		}
	},
	{
		"id": 41,
		"homeTeam": 16,
		"homeTeamGoals": 2,
		"awayTeam": 9,
		"awayTeamGoals": 0,
		"inProgress": true,
		"teamHome": {
			"teamName": "São Paulo"
		},
		"teamAway": {
			"teamName": "Internacional"
		}
	},
	{
		"id": 42,
		"homeTeam": 6,
		"homeTeamGoals": 1,
		"awayTeam": 1,
		"awayTeamGoals": 0,
		"inProgress": true,
		"teamHome": {
			"teamName": "Ferroviária"
		},
		"teamAway": {
			"teamName": "Avaí/Kindermann"
		}
	},
	{
		"id": 43,
		"homeTeam": 11,
		"homeTeamGoals": 0,
		"awayTeam": 10,
		"awayTeamGoals": 0,
		"inProgress": true,
		"teamHome": {
			"teamName": "Napoli-SC"
		},
		"teamAway": {
			"teamName": "Minas Brasília"
		}
	},
	{
		"id": 44,
		"homeTeam": 7,
		"homeTeamGoals": 2,
		"awayTeam": 15,
		"awayTeamGoals": 2,
		"inProgress": true,
		"teamHome": {
			"teamName": "Flamengo"
		},
		"teamAway": {
			"teamName": "São José-SP"
		}
	},
	{
		"id": 45,
		"homeTeam": 5,
		"homeTeamGoals": 1,
		"awayTeam": 3,
		"awayTeamGoals": 1,
		"inProgress": true,
		"teamHome": {
			"teamName": "Cruzeiro"
		},
		"teamAway": {
			"teamName": "Botafogo"
		}
	},
	{
		"id": 46,
		"homeTeam": 4,
		"homeTeamGoals": 1,
		"awayTeam": 12,
		"awayTeamGoals": 1,
		"inProgress": true,
		"teamHome": {
			"teamName": "Corinthians"
		},
		"teamAway": {
			"teamName": "Palmeiras"
		}
	},
	{
		"id": 47,
		"homeTeam": 8,
		"homeTeamGoals": 1,
		"awayTeam": 14,
		"awayTeamGoals": 2,
		"inProgress": true,
		"teamHome": {
			"teamName": "Grêmio"
		},
		"teamAway": {
			"teamName": "Santos"
		}
	},
	{
		"id": 48,
		"homeTeam": 13,
		"homeTeamGoals": 1,
		"awayTeam": 2,
		"awayTeamGoals": 1,
		"inProgress": true,
		"teamHome": {
			"teamName": "Real Brasília"
		},
		"teamAway": {
			"teamName": "Bahia"
		}
	}
]

export let token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY2MDkzMjUzOH0.TCutSMhYPKMMJuO6vmkWDYcRf4N9ERdCk0QY3NAmg9U";