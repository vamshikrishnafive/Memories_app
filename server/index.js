import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routers/post.js';
import userRoutes from './routers/user.js'

export const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/app/posts', postRoutes);
app.use('/app/user', userRoutes);

const CONNCETION_URL = 'mongodb+srv://Vamshi:zyLgyCJhIyL23B8g@cluster0.iz3zy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNCETION_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false})
    .then(() => app.listen(PORT, () => console.log(`App is running on port http://localhost:${PORT}/app`)))
    .catch(err => console.log(err))

mongoose.set('useFindAndModify', false);