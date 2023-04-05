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
  fetchDonarsRequestForReceiver,
  fetchDonarById,
  approveDonationRequests,
  fetchReceiverRequests,
  addReceiver,
  sendEmail,
  CheckReceiverValid,
  updateReceiverRequests,
  requestsForDonar,
  requestsForReceiver,
  fetchReceiverById,
  approveReceiverRequests
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
router.get("/donars_receivers", fetchDonars);
router.get("/count",Count);
router.get("/donar_requests", fetchDonarsRequestForReceiver);
router.post("/donar_by_id", fetchDonarById);
router.post("/receiver_by_id", fetchReceiverById);
router.post("/approve_donation_request", approveDonationRequests);
router.post("/approve_receiver_request", approveReceiverRequests);
router.get("/receiver_requests", fetchReceiverRequests);
router.post("/apply_receiver", addReceiver);
router.post("/send_mail", sendEmail);
router.post("/check_receiver", CheckReceiverValid);
router.post("/update_receiver_requests", updateReceiverRequests);
router.post("/requests_for_donar", requestsForDonar);
router.post("/requests_for_receiver", requestsForReceiver);


export default router

