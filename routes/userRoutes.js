import express from 'express'
import {
  loginController,
  registerController,
  forgotPasswordController,
  testController,
  createBloodReqCntrlr,
  createApplyDonorCntrlr,
  fetchDonars,
  Count,
} from "../controllers/userCtrl.js";
import {
  requireSignIn,
  isAdmin,
  isDonor,
} from "../middleware/authMiddleware.js";
// route objects

const router =express.Router();

// routes

//Register || POST
router.post('/register',registerController);

// Login || POST
router.post('/login',loginController);


// Forgot password || POST
router.post('/forgot-password',forgotPasswordController);

router.post("/blood-request",requireSignIn, createBloodReqCntrlr);
router.post("/apply-donor",requireSignIn, createApplyDonorCntrlr);



//user route
router.get('/user-auth', requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});

//admin route
router.get('/admin-auth', requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
});

//Donor route
router.get('/donor-auth', requireSignIn,isDonor,(req,res)=>{
    res.status(200).send({ok:true});
});

//dummy (test) route
router.get('/test',requireSignIn,isAdmin,testController)

//apis
router.get("/blood-donars",requireSignIn, fetchDonars);
router.get("/count",requireSignIn,Count);


export default router

