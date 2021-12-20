const express = require('express');
const userRouter = require('./routes/Users')
const app = express();
const server = require('http').Server(app);
const socket = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});
const PORT = process.env.PORT || 8000;

app.use('/api/user', userRouter)

server.listen(PORT, () => {
    console.log(`Server is Starting at Port: ${PORT}`)
})