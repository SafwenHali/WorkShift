const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const Auth = require('../models/authModel');

// Helper function to generate access token
const generateAccessToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '15m' });
};

// Helper function to generate refresh token
const generateRefreshToken = () => {
  return jwt.sign({}, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
};

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, role });
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken();
    await Auth.create({ user: user._id, refreshToken });
    res.json({ accessToken, refreshToken });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken();
    await Auth.findOneAndUpdate({ user: user._id }, { refreshToken });
    res.json({ accessToken, refreshToken });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const auth = await Auth.findOne({ refreshToken }).populate('user');
    if (!auth || auth.user._id.toString() !== decoded.id) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }
    const accessToken = generateAccessToken(auth.user);
    const newRefreshToken = generateRefreshToken();
    await Auth.findOneAndUpdate({ user: auth.user._id }, { refreshToken: newRefreshToken });
    res.json
    ({ accessToken, refreshToken: newRefreshToken });
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
