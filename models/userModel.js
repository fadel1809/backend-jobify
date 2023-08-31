import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastName: String,
  location: {
    type: String,
    default: "My City",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    dafault: "user",
  },
  avatar: String,
  avatarPublicId: String,
});
userSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};
export default mongoose.model("User", userSchema);
