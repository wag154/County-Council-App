require('dotenv').config();
const app = require('../app');
const request = require('supertest');

describe('/homepage', () => {
	it('should return 200 OK', async () => {
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(200);
	});

	it('should return a welcome message to the API', async () => {
		const response = await request(app).get('/');
		expect(response.text).toBe('Welcome to our API!');
	});
});
