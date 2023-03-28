require('dotenv').config();
const app = require('../app');
const request = require('supertest');

describe('/jobs', () => {
	it('should return 200 OK when a call for all is made', async () => {
		const response = await request(app).get('/jobs');
		expect(response.statusCode).toBe(200);
	});

	it('should return an array of data when a call to all jobs is made', async () => {
		const response = await request(app).get('/jobs');
		expect(response.body.length).not.toBe(0);
	});

	it('Should return an error if user mis-spells URL', async () => {
		const response = await request(app).get('/jobes');
		expect(response.statusCode).toBe(404);
	});

	it('should return an array of data when called for a single job', async () => {
		const response = await request(app).get('/jobs/2');
		expect(response.statusCode).toBe(200);
		expect(response.body).not.toBe(null);
	});

	it('should return an error if enters incorrect path', async () => {
		const response = await request(app).get('/jobs/100000000000000');
		expect(response.statusCode).toBe(404);
	});

	it('should return with status 201 when new job is added', async () => {
		const requestBody = {
			title: 'test',
			description: 'test',
			contactInfo: 'test',
		};
		const response = await request(app).post('/jobs').send(requestBody);
		expect(response.statusCode).toBe(201);
		expect(response.body.title).toBe('test');
	});
});
