import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    avatar: String,
  },
  { timestamps: true }
);

export default models.User || model("User", UserSchema);