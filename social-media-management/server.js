const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());  // CORS middleware'i ekleyin

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
const socialMediaLinksRouter = require('./routes/socialMediaLink.routes');
app.use('/api/social-media-links', socialMediaLinksRouter);
const userRouter = require('./routes/user.routes');
app.use('/api/users', userRouter);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
