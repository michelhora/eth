import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();
routes.get('/', (req,res) => { res.render('index') })
routes.get('/getwallet', (req,res) => { res.render('getwallet') })

routes.post('/users', UserController.store);
routes.post('/getQR', UserController.index);



export default routes;
