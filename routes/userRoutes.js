import express from 'express'
import { loginController,registerController,testController} from '../controllers/userCtrl.js';
import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js";
// route objects

const router =express.Router();

// routes

//Register || POST
router.post('/register',registerController);
// Login || POST

router.post('/login',loginController);



//dummy (test) route
router.get('/test',requireSignIn,isAdmin,testController)
export default router

