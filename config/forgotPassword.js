
import nodemailer from 'nodemailer';
import asyncHandler from "express-async-handler";
import User from '../models/User.js';
const sendEmail=asyncHandler(async(req,res)=> {
    const { email, } = req.body;
    if (!email) {
      res.status(400);
      throw new Error("All fields are mandatory");
    }
    const user = await User.findOne({ email });
    if(user){
      const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
          user: 'spidyxd0@gmail.com', 
          pass: 'itoqvsaxlddpptlr' 
        }
      });
    
      
      const mailOptions = {
        from: 'sparshchauhan1503@gmail.com', 
        to: email, 
        subject: 'Reset Password', 
        html: `
    <p>Hello there,</p>
    <p>Please click the following link to reset your password:</p>
    <a href="http://localhost:5003/reset-password.html">Reset Password</a>
  ` 
      };
   
      transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
    console.log(error);
    }else{
      console.log('email sent'+ info.response);
    }
    }
    );
    
res.status(200).json({email});
console.log('email sent succesfully');
    }
    else{
      res.status(400);
      throw new Error("email not found");
    }

}
);
export default sendEmail;
