import express from "express";
import {
  bankregisterController,
  bankloginController,
  fetchBloodBank,
  updateBloodBank,
  deleteBloodBank,
  addBloodBank,
} from "../controllers/bloodBankCtrl.js";

const router = express.Router();
// bank regestration post
router.post("/bankregister", bankregisterController);

// Bank Login || POST
router.post("/bloodbanklogin", bankloginController);

router.post("/addBloodBank",addBloodBank)
router.get("/getBloodBank",fetchBloodBank)
router.put("/updateBloodBank",updateBloodBank)
router.delete("/deleteBloodBank",deleteBloodBank)
export default router;
