import mongoose, { Schema } from "mongoose";

const userSchema = new Schema (
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
      required: true,
      unique: true,
      maxlength: 255,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      bcrypt: true,
    },
  },
  {
    timestamps: true
  }
);

userSchema.plugin(require('mongoose-bcrypt'));

const UserModel = mongoose.model('User', userSchema, 'Users');
export default UserModel;

