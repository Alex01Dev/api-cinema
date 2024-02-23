import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import ticketsRouter from './routes/tickets_routes.js'
import path from 'path';

config();//para usar las variables de entorno

const app = express();

//Settings------
app.set('view engine','ejs');


//Middlewares---------
app.use(express.json());//leer json
app.use(express.urlencoded({extended: false}));//para recibir datos del formulario
app.use(morgan('dev'));
app.use('/', ticketsRouter);
// app.use('/movies', moviesRouter);


export default app;