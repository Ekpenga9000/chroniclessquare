import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please add a username"],
    match: [
      /^(?=.{8,20}$)(?![_\s])(?!.*[_.]{2})[a-zA-Z0-9]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumberic letters and be unique",
    ],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: [true, "Email already exists"],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
