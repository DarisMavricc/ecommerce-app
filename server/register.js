import express from 'express'
import {regUser} from './controllers/register.js' 

const router = express.Router();

router.post('/',regUser);


export default router;