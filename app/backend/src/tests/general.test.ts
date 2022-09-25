import * as sinon from 'sinon'; 
import * as chai from 'chai'; 
import * as bcrypt from 'bcryptjs';
import sequelize from '../database/models';
import { Model } from 'sequelize/types';

// @ts-ignore 
import chaiHttp = require('chai-http');

import { app } from '../app'; 
import { describe } from 'mocha';
// import { Response } from 'superagent';
import User from '../database/models/userModel';
import Team from '../database/models/teamModel';
import Match from '../database/models/matchModel';
import LeaderboardService from '../database/services/leaderboardService';
import { adminUser, scoreBoard, arrayTeams, matches, token } from './mock';
// import { Response } from 'superagent';
// let chaiHttpResponse: Response;
import { Request, Response as Resp, NextFunction } from 'express';
import verifyToken from '../database/middlewares/tokenValidate';
chai.use(chaiHttp);

const { expect } = chai;

describe('POST /login', () => {
  beforeEach(() => {
    sinon.stub(User, 'findOne').resolves(adminUser as unknown as Model);
    sinon.stub(bcrypt, 'compare').resolves(true);
  });

  afterEach(() => { sinon.restore(); });

  it('should return a 200 status code', async () => {
    const response = await chai.request(app).post('/login').send({
      email: adminUser.email,
      password: 'secret_admin',
    });
    expect(response).to.be.status(200);
  });

  it('should return a valid token', async () => {
    const response = await chai.request(app).post('/login').send({
      email: adminUser.email,
      password: 'secret_admin',
    });
    expect(response.body).to.have.property('token');
  });
});

describe('GET /leaderboard/home', () => {
  beforeEach(() => {
    let x: string = 'x';
    sinon.stub(sequelize, 'query').resolves([scoreBoard, x] as unknown as [any, string]);
    sinon.stub(LeaderboardService, 'getLeaderboardHome').resolves(scoreBoard);
  });

  afterEach(() => { sinon.restore(); });

  it('should return a 200 status code', async () => {
    const response = await chai.request(app).get('/leaderboard/home');
    expect(response).to.be.status(200);
  });

  it('should return a valid leaderboard', async () => {
    const response = await chai.request(app).get('/leaderboard/home');
    expect(response.body).to.be.eql(scoreBoard);
  });
});

describe('GET /leaderboard/away', () => {
  beforeEach(() => {
    let x: string = 'x';
    sinon.stub(sequelize, 'query').resolves([scoreBoard, x] as unknown as [any, string]);
    sinon.stub(LeaderboardService, 'getLeaderboardAway').resolves(scoreBoard);
  });

  afterEach(() => { sinon.restore(); });

  it('should return a 200 status code', async () => {
    const response = await chai.request(app).get('/leaderboard/away');
    expect(response).to.be.status(200);
  });

  it('should return a valid leaderboard', async () => {
    const response = await chai.request(app).get('/leaderboard/away');
    expect(response.body).to.be.eql(scoreBoard);
  });
});

describe('GET /teams', () => {
  beforeEach(() => {
    sinon.stub(Team, 'findAll').resolves(arrayTeams as unknown as Model[]);
  });

  afterEach(() => { sinon.restore(); });

  it('should return a 200 status code', async () => {
    const response = await chai.request(app).get('/teams');
    expect(response).to.be.status(200);
  });

  it('should return a valid leaderboard', async () => {
    const response = await chai.request(app).get('/teams');
    expect(response.body).to.be.eql(arrayTeams);
  });
});

describe('GET /matches', () => {
  beforeEach(async() => {
    const validateToken = (_req: Request, _res: Resp, next: NextFunction) => {
      return next();
    };
    sinon.stub(verifyToken, 'verifyToken').callsFake(validateToken);
    // sinon.stub(Match, 'findOne').resolves(matches as unknown as Model);
  });

  afterEach(() => { sinon.restore(); });

  it('should return a 200 status code', async () => {
    const response = await chai.request(app).get('/matches').set({ authorization: token });
    expect(response).to.be.status(200);
  });

  it('should return a valid matches', async () => {
    const response = await chai.request(app).get('/matches');
    expect(response.body).to.be.eql(matches);
  });
});


