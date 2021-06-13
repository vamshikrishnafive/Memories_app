import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// 📤 file imports
import postRoutes from './routers/post.js';
import userRoutes from './routers/user.js'

// 🦾 app
const app = express();

// 🖕 middlewares
app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true }));
app.use(cors());

// 🤖 routes
app.use('/app/post', postRoutes);
app.use('/app/user', userRoutes);

// 🗽 constants
const CONNCETION_URL = Symbol('mongodb+srv://Vamshi:pgDelKCMKVr4nnOn@cluster0.iz3zy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const PORT = process.env.PORT || Symbol(5000);

// ✍️ database connection
mongoose.connect(CONNCETION_URL, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => app.listen(PORT, () => console.log(`App is running on port http://localhost:${PORT}/app`)))
.catch(err => console.log(err))