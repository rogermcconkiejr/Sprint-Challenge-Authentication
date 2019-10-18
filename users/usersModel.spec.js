const UserModel = require('./users-model');
const request = require('supertest');
const db = require('../database/dbConfig');

describe('register user', ()=>{
    beforeEach(async ()=>{
        await db('users').truncate();
    })
        it('should add user to database', async ()=>{
            const records = await db('users');
            expect(records).toHaveLength(0);
            
            user = await UserModel.add({ username: 'Testing', password: 'testingpass' });
            expect (user.username).toBe('Testing');
    
            const users = await db('users');
            expect (users).toHaveLength(1);
        })
    })

    describe('register user', ()=>{
        beforeEach(async ()=>{
            await db('users').truncate();
        })
            it('check users name', async ()=>{
                
                user = await UserModel.add({ username: 'Testing1', password: 'testingpass' });
                expect (user.username).toBe('Testing1');
        
            })
        })

        describe('logged in username exists', ()=>{
            beforeEach(async ()=>{
                await db('users').truncate();
            })
                it('checks if user exists', async ()=>{
                    
                    user = await UserModel.add({ username: 'Testing', password: 'testingpass' });
                    expect (user.username).toBeTruthy();
            
                })
            })

            describe('logged in password is there', ()=>{
                beforeEach(async ()=>{
                    await db('users').truncate();
                })
                    it('checks if password is there', async ()=>{
                        
                        user = await UserModel.add({ username: 'Testing', password: 'testingpass' });
                        expect (user.password).toBeTruthy();
                
                    })
                })