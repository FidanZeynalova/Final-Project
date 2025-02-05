const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true }, //İstifadəçinin adı
  lastName: { type: String, required: true }, //Soyadı
  age: { type: Number, required: true }, // yaşı
  gender: { type: String, enum: ["male", "female"], required: true }, //qadın ya da kişi olub-olmaması
  email: { type: String, required: true, unique: true },//email-i
  password: { type: String, required: true },// parolu
  confirmPassword: { type: Number, required: true },// təsdiq parolu
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipes" }], // sevdiyi yemək reseptləri
  createdAt: { type: Date, default: Date.now } //Qeydiyyatdan keçdiyi tarix
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
