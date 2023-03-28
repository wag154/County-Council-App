require('dotenv').config();
const app = require('../app');
const request = require('supertest');

describe('/items', () => {
	it('should return 200 OK when a call for all is made', async () => {
		const response = await request(app).get('/items');
		expect(response.statusCode).toBe(200);
	});

	it('should return an array of data when a call to all jobs is made', async () => {
		const response = await request(app).get('/items');
		expect(response.body.length).not.toBe(1);
	});

	// it('should return an array of data when called for a single job', async () => {
	// 	const response = await request(app).get('/jobs/2');
	// 	expect(response.statusCode).toBe(200);
	// 	expect(response.body).not.toBe(null);
	// });

	it('should return with status 201 when new job is added', async () => {
		const requestBody = {
			name: 'test',
			description: 'test',
		};
		const response = await request(app).post('/items').send(requestBody);
		expect(response.statusCode).toBe(201);
	});

	// it('should return with status 204 when job is deleted', async () => {
	// 	const response = await request(app).delete('/jobs/1');
	// 	expect(response.statusCode).toBe(204);
	// });
	// it('should return with status 200 when job is updated', async (data) => {
	// 	const requestBody = {
	// 		title: 'test',
	// 		description: 'test',
	// 		contactInfo: 'test',
	// 	};
	// 	const response = await request(app).patch('/jobs/28').send(requestBody);
	// 	console.log(response);
	// 	expect(response.statusCode).toBe(204);
	// });
});
