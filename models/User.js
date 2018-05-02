const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: { type: String, default: "" },
  linkedInId: { type: String, default: "" },
  displayName: { type: String, default: "" },
  fullName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  firstName: { type: String, default: "" },
  email: { type: String, default: "" },
  password: { type: String, default: "" },
  company: { type: String, default: "" },
  iconPhotoURL: { type: String, default: "" },
  bigPhotoURL: { type: String, default: "" },
  linkedInProfileURL: { type: String, default: "" },
  googleProfileURL: { type: String, default: "" }
});

mongoose.model('users', userSchema);