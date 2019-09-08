require('dotenv').config();

const express = require('express');
const connectDb = require('./config/db');

// Connect Database
connectDb();

const PORT = process.env.PORT || 5000;

// Import routes
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');

const app = express();
 
// Setup middleware
app.use(express.json({ extended: false }));

// Setup Routes
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
