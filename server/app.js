const express = require ("express");
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json())

const userRouter = require ("./routers/user_router");
const itemRouter = require("./routers/item_routers");
const jobRouter  = require ("./routers/jobs_router");
const eventRouter = require ("./routers/event_router"); 


app.get('/', (req, res) => {
    res.send('Welcome to our API!')
})

app.use("/user", userRouter);
app.use("/item", itemRouter);
app.use("/jobs", jobRouter);
app.use("/event", eventRouter);


module.exports = app;