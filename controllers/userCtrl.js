import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import RecReqModel from "../models/RecReqModel.js";
//register callback
export const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });

    if (existingUser) {
      return res
        .status(200)
        .send({ message: "User Already Exist", success: false });
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Register Sucessfully", success: true });
  } catch (error) {
    if (error) console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};


//login handler
export const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: "user not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(200).send({ message: "invalid email or passowrd " });
    }

    const token = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "7d",
      }
    );
    res.status(200).send({
      success: true,
      message: "login success",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        DOB: user.DOB,
        adddress: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
  console.log(error);
    res
      .status(500)
      .send({ message: `error in logincontroller${error.message}` });
  }
};

// forgot password controller
export const forgotPasswordController = async (req, res) => {
  try {
    const {email,answer,newPassword}=req.body;
    if(!email){
      res.status(400).send({message:"email is required"})
    }
    if(!answer){
      res.status(400).send({message:"answer is required"})
    }
    if(!newPassword){
      res.status(400).send({message:"newPassword is required"})
    }
    //check
    const user=await userModel.findOne({email,answer})
    if(!user){
      return res.status(404).send({
        success:false,
        message:"wrong email or password"
      })
    }
     const salt = await bcrypt.genSalt(10);
     const hashed = await bcrypt.hash(newPassword, salt);
    await userModel.findByIdAndUpdate(user._id,{password:hashed})
    res.status(200).send({
      success:true,
      message:"password reset successfully"
    })
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "something went wrong", success: false, error });
  }
};

//test controller to protect the routes
export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
export const createBloodReqCntrlr = async (req, res) => {
  try {
    const newUser = new RecReqModel(req.body);
    await newUser.save();
    const data=req.body.data;
    res.status(201).send({
      success: true,
      message: "new request created",
      data
    });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
