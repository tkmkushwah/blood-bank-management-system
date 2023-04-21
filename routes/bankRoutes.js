import express from "express";
import {
  bankregisterController,
  bankloginController,
  fetchBloodBank,
  updateBloodBank,
  deleteBloodBank,
  addBloodBank,
} from "../controllers/bloodBankCtrl.js";
import { isBank, requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/bank-auth",requireSignIn, isBank, (req, res) => {
  res.status(200).send({ ok: true });
});



// bank regestration post
router.post("/bankregister", bankregisterController);

// Bank Login || POST
router.post("/bloodbanklogin", bankloginController);

router.post("/addBloodBank",addBloodBank)
router.get("/getBloodBank",fetchBloodBank)
router.post("/update_data", updateBloodBank);
router.delete("/deleteBloodBank",deleteBloodBank)
export default router;
