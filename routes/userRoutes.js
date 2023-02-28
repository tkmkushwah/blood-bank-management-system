import express from 'express'
import {
  loginController,
  registerController,
  forgotPasswordController,
  testController,
} from "../controllers/userCtrl.js";

import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js";
// route objects

const router =express.Router();

// routes

//Register || POST
router.post('/register',registerController);

// Login || POST
router.post('/login',loginController);

// Forgot password || POST
router.post('/forgot-password',forgotPasswordController);

//user route
router.get('/user-auth', requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});

//admin route
router.get('/admin-auth', requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
});

//dummy (test) route
router.get('/test',requireSignIn,isAdmin,testController)
export default router

