require('dotenv').config();
const app = require('../app');
const request = require('supertest');

describe('GET /', () => {
	it('should return 200 OK', async () => {
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(200);
	});

	it('should return a welcome message to the API', async () => {
		const response = await request(app).get('/');
		expect(response.text).toBe('Welcome to our API!');
	});
});

describe('GET /JOBS', () => {
	it('should return 200 OK', async () => {
		const response = await request(app).get('/jobs');
		expect(response.statusCode).toBe(200);
	});

	it('should return an array of data when called', async () => {
		const response = await request(app).get('/jobs');
		expect(response.body.length).not.toBe(0);
	});

	it('should return an array of data when called', async () => {
		const response = await request(app).get('/jobs/1');
		expect(response.statusCode).toBe(200);
		expect(response.body).not.toBe(null);
	});
});
