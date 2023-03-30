const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors(
	methods = ["POST,USE,PATCH,UPDATE"]
))
app.use((req,res,next)=>{
	console.log(req.method,req.originalUrl)
	next()
})
app.use(express.json());
// app.use((req,res)=>{
// 	console.log(req.method,req.originalUrl)
// })
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
