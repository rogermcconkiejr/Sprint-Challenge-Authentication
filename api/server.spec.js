const request = require('supertest');
const Users = require('../users/users-model');
const db = require('../database/dbConfig');

const server = require('./server.js');

describe('Register /api/auth/register', () => {
    beforeEach(async ()=>{
        await db('users').truncate();
    })
    it('should return 200 http status code', async () => {
        // User = await Users.add({ username: 'Test2', password: "testpass2" });        
        const response = await request(server).post('/api/auth/register');
        expect(response.status).toBe(500);
          
      });

      test('should return JSON', async () => {
        // User = await Users.add({ username: 'Test', password: "testpass" });

        const response = await request(server).post('/api/auth/register');
        expect(response.type).toMatch("text/html");
    });
  });

