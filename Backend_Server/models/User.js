import mongoose from "mongoose";

// Set the strictQuery option
mongoose.set("strictQuery", true); // or false, depending on your needs

// Connect to your database (replace 'your_database_url' with your actual URL)

const DATABASE_URL = process.env.DATABASE_URL;
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Defining Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  tc: { type: Boolean, required: true },
});

// Model
const UserModel = mongoose.model("user", userSchema);

export default UserModel;
