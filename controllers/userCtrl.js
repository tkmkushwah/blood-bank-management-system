import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import RecReqModel from "../models/RecReqModel.js";
import ApplyDonerModel from "../models/ApplyDonerModel.js";
import nodemailer from 'nodemailer'
import RecBankModel from "../models/RecBankModel.js";
import BankBloodData from "../models/BankBloodData.js";
import dotenv from 'dotenv'
// import BloodBank from "../models/BloodBank.js";
dotenv.config(); 

let mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD
  }
});



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
        usertype:user.usertype
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
    const { email, answer, newPassword } = req.body;
    if (!email) {
      res.status(400).send({ message: "email is required" })
    }
    if (!answer) {
      res.status(400).send({ message: "answer is required" })
    }
    if (!newPassword) {
      res.status(400).send({ message: "newPassword is required" })
    }
    //check
    const user = await userModel.findOne({ email, answer })
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "wrong email or password"
      })
    }
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(newPassword, salt);
    await userModel.findByIdAndUpdate(user._id, { password: hashed })
    res.status(200).send({
      success: true,
      message: "password reset successfully"
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
  console.log(req.body)
  try {
    const newUser = new RecReqModel(req.body);
    let response = await newUser.save();
    // const data=req.body.data;
    res.status(201).send({
      success: true,
      message: "new request created",
      data: response
    });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
export const createApplyDonorCntrlr = async (req, res) => {
  console.log(req.body);
  try {
    const newUser = new ApplyDonerModel(req.body);
    let response = await newUser.save();
    // const data=req.body.data;
    res.status(201).send({
      success: true,
      message: "new request created",
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

export const fetchDonars = async (req, res) => {
  // console.log(req.body)
  try {
    const donors = await RecReqModel.find({})
    const receivers = await ApplyDonerModel.find({})
    res.send({
      success:true,
      data:{
        donors:donors,
        receivers:receivers
    }})
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

// export const createApplyDonorCntrlr = async (req, res) => {
//   try {
//     const newDonor = new ApplyDonerModel(req.body);
//     await newDonor.save();
//     const data=req.body.data;
//     res.status(201).send({
//       success: true,
//       message: "new request created",
//       data
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({ error });
//   }
// };


export const Count = async (req, res) => {
  // console.log(req.body)
  const bloodgroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'A2-', 'A2+', 'A1B-', 'A1B+', 'A2B+', 'A2B-']
  async function prepareObj() {
    let response = {
      count: {}
    }
    let arr = await Promise.all(bloodgroups.map(async (item) => {
      let count = await RecReqModel.count({ bloodgroup: item })
      // console.log(count,"COUNT")
      response["count"][item] = count
      return count
    }))

    let donarsavailable = await ApplyDonerModel.countDocuments({status:"Approved"})
    console.log(arr, "ARR", donarsavailable)
    response['donarsavailable'] = donarsavailable
    let donationpending = await ApplyDonerModel.countDocuments({status:"Pending"})
    response['donationpending'] = donationpending
    let bloodrequests = await RecReqModel.countDocuments({status:"Pending"})
    response['bloodrequests'] = bloodrequests
    let bloodrequestsapproved = await RecReqModel.countDocuments({status:"Approved"})
    response['bloodrequestsapproved'] = bloodrequestsapproved
    return response
  }

  try {
    let countObj = await prepareObj()
    console.log(countObj)
    res.send({
      success: true,
      count: countObj.count,
      donarsavailable: countObj.donarsavailable,
      bloodrequests:countObj.bloodrequests,
      donationpending:countObj.donationpending,
      bloodrequestsapproved:countObj.bloodrequestsapproved
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};


export const fetchDonarsRequestForReceiver = async (req, res) => {
  try {
    let response = await ApplyDonerModel.find({})
    res.send({
      success: true,
      data: response
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}


export const fetchDonarById = async (req, res) => {
  try {
    console.log(req.body, "ID")
    let response = await ApplyDonerModel.findById(req.body.id)
    res.send({
      success: true,
      data: response
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}

export const fetchReceiverById = async (req, res) => {
  try {
    console.log(req.body, "ID")
    let response = await RecReqModel.findById(req.body.id)
    res.send({
      success: true,
      data: response
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}


export const approveDonationRequests = async (req, res) => {
  try {
    let response = await ApplyDonerModel.updateOne({ email: req.body.email }, { status: "Approved" })
    res.send({
      success: true,
      data: response
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}

export const approveReceiverRequests = async (req, res) => {
  try {
    let response = await RecReqModel.updateOne({ email: req.body.email }, { status: "Approved",requests:0 })
    res.send({
      success: true,
      data: response
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}


export const fetchReceiverRequests = async (req, res) => {
  try {
    let response = await RecReqModel.find({})
    res.send({
      success: true,
      data: response
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}


export const sendEmail = async (req, res) => {
  let mailDetails = {
    from: process.env.EMAIL,
    to: req.body.recipient.toString(),
    subject: req.body.subject,
    html: req.body.text
  };

  try {
    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log('Error Occurs', err);
      } else {
        console.log('Email sent successfully');
        res.send({
          success: true,
          message: 'Email sent successfully',
          data: data
        })
      }
    });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}

export const addReceiver = async (req, res) => {
  const newUser = new RecReqModel(req.body);
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

export const CheckReceiverValid = async (req, res) => {
  try {
    const user = await RecReqModel.findOne({ email: req.body.email })
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

export const updateReceiverRequests = async (req, res) => {
  try {
    const response = await RecReqModel.updateOne({ email: req.body.email }, { requests: 1,donarId:req.body.donor_id})
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

export const requestsForDonar = async (req, res) => {
  try {
    const response = await ApplyDonerModel.find({ email: req.body.email })
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

export const requestsForReceiver = async (req, res) => {
  try {
    const response = await RecReqModel.find({ email: req.body.email })
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

//bank

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
  const newUser = new RecBankModel(req.body);
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

export const fetchRequestById = async (req, res) => {
  try {
    console.log(req.body, "ID")
    let response = await RecBankModel.findById(req.body.id)
    res.send({
      success: true,
      data: response
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}

export const approvebankDonationRequests = async (req, res) => {
  try {
    let response = await RecBankModel.updateOne({ email: req.body.email }, { status: "Approved" })
    res.send({
      success: true,
      data: response
    })
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}



