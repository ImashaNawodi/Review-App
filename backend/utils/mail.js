exports.generateOTP =(otp_length=6)=>  {
    
    // generate 6 digit otp
    let OTP = "";
    for (let i = 1; i <= otp_length; i++) {
      const randomVal = Math.round(Math.random() * 9);
      OTP += randomVal;
    }
    return OTP;

    
};
exports.generteMailTransporter =() => 
nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2bd7b703dae738",
      pass: "edc783df7d738b",
    },
  });
