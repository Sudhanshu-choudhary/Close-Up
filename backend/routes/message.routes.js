import e from "express"
import sendMessage from "../controllers/sendMessage.controller.js";
import getMessage from "../controllers/getMessage.controller.js";
import checkAndProtectRoute from "../Middlewares/checkAndProtectRoute.middleware.js"

const router = e.Router();
router.get("/:id", checkAndProtectRoute, getMessage)
router.post("/send/:id", checkAndProtectRoute, sendMessage)
export default router; 