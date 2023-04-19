import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import BloodBank from "../models/BloodBank.js";

//protected routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET_KEY
    );
    req.user = decode; //decrypted
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await  userModel.findById(req.user._id);
    if (user.usertype !== "admin") {
      return res
        .status(401)
        .send({ success: false, message: "unautherised access" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .send({ success: false, message: "error in admin middleware" });
  }
};

//donor access
export const isDonor = async (req, res, next) => {
  try {
    const user = await  userModel.findById(req.user._id);
    if (user.usertype !== "Donor") {
      return res
        .status(401)
        .send({ success: false, message: "unautherised access" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .send({ success: false, message: "error in Donor middleware" });
  }
};
export const isReceiver = async (req, res, next) => {
  try {
    const user = await  userModel.findById(req.user._id);
    if (user.usertype !== "Receiver") {
      return res
        .status(401)
        .send({ success: false, message: "unautherised access" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .send({ success: false, message: "error in Receiver middleware" });
  }
};
export const isBank = async (req, res, next) => {
  try {
    const user = await  BloodBank.findById(req.user._id);
    if (user.usertype !== "bloodbank") {
      return res
        .status(401)
        .send({ success: false, message: "unautherised access" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res
      .status(401)
      .send({ success: false, message: "error in bank middleware" });
  }
};
