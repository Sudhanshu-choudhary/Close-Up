import express from 'express';
import checkAndProtectRoute from "../Middlewares/checkAndProtectRoute.middleware.js"
import getUsers from '../controllers/getUsers.controller.js'

const router =express.Router();

router.get('/', checkAndProtectRoute, getUsers);

export default router;