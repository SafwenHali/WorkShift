const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const Auth = require("../models/authModel");
const verifyAccount = require("../models/verifyAccount");
const { RegisterValidation } = require("../validation/authValidation");
const { sendEmail } = require("../services/sendGrid");
const { generateCode } = require("../utils/generateCode");
const { emailCode } = require("../utils/email");
const UserModel = require("../models/userModel");
const VerifyAccountModel = require("../models/verifyAccount");
//generate access token
const generateAccessToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

//generate refresh token
const generateRefreshToken = () => {
  return jwt.sign({}, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
};
//Register
exports.register = async (req, res) => {
  try {
    console.log(req);
    let { value, error } = RegisterValidation.validate(req.body);
    if (error) {
      console.log(error);
      // if error respond with bad request
      return res
        .status(400)
        .json({ error: "bad request verify the sent values" });
    }

    // validate uniqueness of the email
    let existingUser = await UserModel.findOne({ email: value.email });

    if (existingUser) {
      return res.status(400).json({ message: "email already is used" });
    }
    //const hashedPassword = await bcrypt.hash("password", 10);
    const hashedPassword = await bcrypt.hash(value.password, 10);
    // let x = value.firstName;
    console.log(value);
    value.password = hashedPassword;
    value.confirmPassword = hashedPassword;
    let newUser = UserModel({ ...value });
    //save the user
    await newUser.save();

    // generate the code
    let code = generateCode();
    await VerifyAccountModel({ userId: newUser._id, code }).save();

    sendEmail({
      to: newUser.email,
      from: "jebriaicha25@gmail.com",
      subject: "Verify your email",
      text: "message ",
      html: emailCode(code),
    });

    res.status(201).json({ message: "account created and email is sent" });
  } catch (e) {
    console.log(e);
    res.json("error in server ");
  }

  // res.status(200).json({ message: "Get goals" });
  // try {
  //   const {
  //     firstName,
  //     lastName,
  //     userName,
  //     email,
  //     password,
  //     confirmPassword,
  //     role,
  //   } = req.body;
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   console.log(hashedPassword);
  //   const user = await User.create({
  //     firstName,
  //     lastName,
  //     userName,
  //     email,
  //     password: hashedPassword,
  //     confirmPassword,
  //     role,
  //   });
  //   const accessToken = generateAccessToken(user);
  //   console.log(accessToken);
  //   const refreshToken = generateRefreshToken();
  //   await Auth.create({ user: user._id, refreshToken });
  //   res.json({ accessToken, refreshToken });
  //   //res.status(200).json({ message: "Get goals" });
  // } catch (err) {
  //   console.log("issue");
  //   // res.status(500).json({ message: err.message });
  // }
};
//Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken();
    await Auth.findOneAndUpdate({ user: user._id }, { refreshToken });
    res.json({ accessToken, refreshToken });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//
exports.refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const auth = await Auth.findOne({ refreshToken }).populate("user");
    if (!auth || auth.user._id.toString() !== decoded.id) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }
    const accessToken = generateAccessToken(auth.user);
    const newRefreshToken = generateRefreshToken();
    await Auth.findOneAndUpdate(
      { user: auth.user._id },
      { refreshToken: newRefreshToken }
    );
    res.json({ accessToken, refreshToken: newRefreshToken });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.logout = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    await Auth.findOneAndDelete({ refreshToken });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.verifyAccount = async (req, res) => {
  // verify account
  let { code, userId } = req.body;
  let verifyAccount = await accountVerificationModel.findOne({
    userId: userId,
  });
  if (!verifyAccount) {
    return res.status(400).json({ message: "bad request" });
  }
  if (verifyAccount.code != code) {
    return res.status(400).json({ message: "Code error" });
  }
  const userVerified = await UserModel.findOneAndUpdate(
    { _id: userId },
    { isVerifed: true }
  );
  await verifyAccount.deleteOne();

  sendEmail({
    to: userVerified.email,
    from: "jebriaicha25@gmail.com",
    subject: "your account has been verified",
    text: "text",
    html: `<h1>Welcome ${userVerified.firstName} your account has been verified </h1>`,
  });
  res.json({ message: "Account verified" });
};

// exports.verifyAccount = async (req, res) => {
//   // verify account
//   let { code, userId } = req.body;
//   let verifyAccount = await VerifyAccountModel.findOne({ userId: userId });
//   if (!verifyAccount) {
//     return res.status(400).json({ message: "bad request" });
//   }
//   if (verifyAccount.code != code) {
//     return res.status(400).json({ message: "Code error" });
//   }
//   const userVerified = await UserModel.findOneAndUpdate(
//     { _id: userId },
//     { isVerifed: true }
//   );
//   await verifyAccount.deleteOne();

//   sendEmail({
//     to: userVerified.email,
//     from: "jebriaicha25@gmail.com",
//     subject: "your account has been verified",
//     text: "text",
//     html: `<h1>Welcome ${userVerified.firstName} your account has been verified </h1>`,
//   });
//   res.json({ message: "Account verified" });
// };

exports.salem = async (req, res) => {
  console.log("after salem");
  res.json({ message: "in salem" });
};
