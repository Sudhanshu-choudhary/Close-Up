import express from 'express';
import { Signup } from '../controllers/signup.controller.js';
import { login } from '../controllers/login.controller.js';
import { logout } from '../controllers/logout.controller.js';
const router = express.Router();

router.post("/signup", Signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;