require('dotenv').config();
const app = require('../app');
const request = require('supertest');

describe('/events', () => {
	it('should return 200 OK when a call for all is made', async () => {
		const response = await request(app).get('/events');
		expect(response.statusCode).toBe(200);
	});

	it('should return an array of data when a call to all jobs is made', async () => {
		const response = await request(app).get('/events');
		expect(response.body.length).not.toBe(0);
	});

	it('should return an array of data when called for a single job', async () => {
		const response = await request(app).get('/events/2');
		expect(response.statusCode).toBe(200);
		expect(response.body).not.toBe(null);
	});

	it('should return with status 201 when new event is added', async () => {
		const requestBody = {
			name: 'test',
			description: 'test',
			place: 'test',
			time: 'test',
		};
		const response = await request(app).post('/events').send(requestBody);
		expect(response.statusCode).toBe(201);
		expect(response.body.name).toBe('test');
	});

	it('should return with status 204 when job is deleted', async () => {
		const response = await request(app).delete('/jobs/1');
		expect(response.statusCode).toBe(204);
	});
	// it('should return with status 200 when job is updated', async (data) => {
	// 	const requestBody = {
	// 		name: 'test',
	// 		description: 'test',
	// 		place: 'test',
	// 		time: 'test',
	// 	};
	// 	const response = await request(app).patch('/jobs/4').send(requestBody);
	// 	console.log(response);
	// 	expect(response.statusCode).toBe(204);
	// });
});
