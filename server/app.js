const express = require('express');
const cors = require('cors');
const app = express();
const logger = require ("./logger")

app.use(cors())
app.use(logger)
app.use(express.json());
const userRouter = require('./routers/user_router');
const itemRouter = require('./routers/item_router');
const jobRouter = require('./routers/jobs_router');
const eventRouter = require('./routers/event_router');

app.get('/', (req, res) => {
	res.send('Welcome to our API!');
});

app.use('/items', itemRouter);
app.use('/user', userRouter);
app.use('/jobs', jobRouter);
app.use('/events', eventRouter);

module.exports = app;
