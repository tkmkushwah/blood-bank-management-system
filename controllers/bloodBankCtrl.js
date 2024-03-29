import BloodBank from "../models/BloodBank.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import BankBloodData from "../models/BankBloodData.js";
import RecBankModel from "../models/RecBankModel.js";
import ContactModel from "../models/ContactModel.js";

export const bankregisterController = async (req, res) => {
  try {
    const existingUser = await BloodBank.findOne({ email: req.body.email });

    if (existingUser) {
      return res
        .status(200)
        .send({ message: "Bank Already Exist", success: false });
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new BloodBank(req.body);
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

export const bankloginController = async (req, res) => {
  try {
    const user = await BloodBank.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: "user not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(200).send({ message: "invalid email or passowrd " });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login success",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        usertype: user.usertype,
        phone: user.phone,
        answer:user.answer,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: `error in bankloginController${error.message}` });
  }
};

export const addBloodBank = async (req, res) => {
  const newBloodBank = new BankBloodData(req.body);
  const data = await newBloodBank.save();
  try {
    //  console.log(buf)
    res.send({
      success: true,
      data: data,
      // message:"You are "
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
} 

export const fetchBloodBank = async (req, res) => {
  try {
    const response = await BloodBank.find()
    console.log(response)
    res.send({
      success:true,
      data:response
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}

export const updateBloodBank = async (req, res) => {
  try {
    const response = await BankBloodData.findByIdAndUpdate(req.body.id,{bloodgroup:req.body.bloodgroup})
    console.log(response)
    res.send({
      success:true,
      data:response
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}

export const deleteBloodBank = async (req, res) => {
  try {
    const response = await BloodBank.findByIdAndDelete(req.body.id)
    console.log(response)
    res.send({
      success:true,
      data:response
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}

export const fetchBanksdata = async (req, res) => {
  try {
    let response = await BankBloodData.find({})
    res.send({
      success: true,
      data: response
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}

export const fetchBankById = async (req, res) => {
  try {
    console.log(req.body, "ID")
    let response = await BankBloodData.findById(req.body.id)
    res.send({
      success: true,
      data: response
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}

export const fetchBankForReceiver = async (req, res) => {
  try {
    let response = await BankBloodData.find({})
    res.send({
      success: true,
      data: response
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}

export const updateRecToBankRequests = async (req, res) => {
  try {
    const response = await RecBankModel.updateOne({ email: req.body.email }, { requests: 1,donarId:req.body.donor_id})
    console.log(response)
    res.send({
      success:true,
      data:response
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}

export const addBankReceiver = async (req, res) => {
  const newUser = new RecBankModel (req.body);
  const data = await newUser.save();

  try {
    //  console.log(buf)
    res.send({
      success: true,
      data: data,
      // message:"You are "
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}

export const CheckBankReceiverValid = async (req, res) => {
  try {
    const user = await RecBankModel.findOne({ email: req.body.email })
    console.log(user)
    if (user === null) {
      res.send({ success: false,data:user })
    } else {
      res.send({
        success: true,
        data: user
      })
    }
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}

export const bankcheckController = async (req, res) => {
  try {
    const bank = await BankBloodData.findOne({ email: req.body.email });
    if (!bank) {
      return res
        .status(200)
        .send({ message: "bank not found", success: false });
    }
    const receiver=await RecBankModel.findOne({donor_id:req.body.donorId})
    console.log(bank._id)
    console.log(donor_id)

    if(bank._id===donor_id)
    {
      console.log("hello")
    }
    
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: `error in bankloginController${error.message}` });
  }
};

export const BankrequestsForReceiver = async (req, res) => {
  try {
    const response = await RecBankModel.find({ donarId: req.body.donarId })
    console.log(response)
    res.send({
      success:true,
      data:response
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}

export const addQuarry = async (req, res) => {
  const newQuarry = new ContactModel(req.body);
  const data = await newQuarry.save();
  try {
    //  console.log(buf)
    res.send({
      success: true,
      data: data,
      // message:"You are "
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
} 
