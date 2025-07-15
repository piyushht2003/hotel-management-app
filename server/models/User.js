import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    _id: {type: String, require: true},
    username: {type: String, require: true},
    email: {type: String, require: true},
    email: {type: String, require: true},
    role: {type: String, enum: ["user", "hotelOwner"], default: "user"},
    recentSearchedCities: [{type: String, required: true}],
},{timestamp: true});

const User = mongoose.model("User", userSchema);

export default User;