import express from "express";
import {
  bankregisterController,
  bankloginController,
  fetchBloodBank,
  updateBloodBank,
  deleteBloodBank,
  addBloodBank,
  fetchBanksdata,
  fetchBankById,
  fetchBankForReceiver,
  updateRecToBankRequests,
  addBankReceiver,
  CheckBankReceiverValid,
  bankcheckController,
  BankrequestsForReceiver,
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

router.post("/addData", addBloodBank);
router.get("/getBloodBank",fetchBloodBank)
router.post("/xyz", updateBloodBank);
router.get("/bank_data", fetchBanksdata);
router.delete("/deleteBloodBank",deleteBloodBank)
router.post("/bank_by_id", fetchBankById);
router.get("/bank_requests",fetchBankForReceiver );
router.post("/update_rectobank_requests",updateRecToBankRequests);
router.post("/apply_bankreceiver",   addBankReceiver);
router.post("/check_bankreceiver", CheckBankReceiverValid);
router.get("/recReqToBank", bankcheckController);
router.post("/bankrequests_for_receiver", BankrequestsForReceiver);

export default router;
