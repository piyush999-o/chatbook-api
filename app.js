const express = require('express');
const userRouter = require('./routes/Users')
const app = express();
const http = require('http').Server(app);

const PORT = process.env.PORT || 8000;

app.use('/', userRouter)

http.listen(PORT, () => {
    console.log(`Server is Starting at Port: ${PORT}`)
})