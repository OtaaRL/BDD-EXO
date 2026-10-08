
import express from 'express'

import dotenv from 'dotenv'

import EventsRoute from './Routes/events.route.js'
import UsersRoute from './Routes/users.route.js'
import participantsRoute from './Routes/participants.route.js'
import commentsRoute from './Routes/comments.route.js'
import authRoute from './Routes/auth.route.js'
import checkToken from './Middleware/auth.middleware.js'

const app = express();

dotenv.config();

app.use(express.json());

app.use("/events",checkToken, EventsRoute);
app.use("/users",checkToken, UsersRoute);
app.use("/participants",checkToken, participantsRoute);
app.use("/comments",checkToken, commentsRoute);
app.use("/auth", authRoute);

app.get("/", (req,res) => {
    res.json({status : "OK"})
})

app.listen(process.env.SERVER_PORT, function(){
    console.log(`http://127.0.0.1:${process.env.SERVER_PORT}/`);
    console.log(`http://localhost:${process.env.SERVER_PORT}/`);
})