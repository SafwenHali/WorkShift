const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  refreshToken: { type: String, required: true },
});

const Auth = mongoose.model('Auth', AuthSchema);

module.exports = Auth;

