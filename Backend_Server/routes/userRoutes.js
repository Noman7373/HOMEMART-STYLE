import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserController from "../controllers/userController.js";
import checkUserAuth from "../middlewares/auth-middleware.js";
import path from "path";
// Load environment variables from .env file
dotenv.config({ path: ".env" });

// let handlCors;
const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
  origin: "https://homemart-style-mart.onrender.com", // Replace with your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

const _dirName = path.resolve();

// Apply Middleware
app.use(cors(corsOptions));
app.use(express.json()); // JSON parser

// Public Routes
const router = express.Router();
router.post("/register", UserController.userRegistration);
router.post("/login", UserController.userLogin);
router.post(
  "/send-reset-password-email",
  UserController.sendUserPasswordResetEmail
);
router.post("/reset-password/:id/:token", UserController.userPasswordReset);

// Protected Routes
router.use("/changepassword", checkUserAuth);
router.use("/loggeduser", checkUserAuth);
router.post("/changepassword", UserController.changeUserPassword);
router.get("/loggeduser", UserController.loggedUser);

// Apply router under the /api/user path
app.use("/api/user", router);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.use(express.static(path.join(_dirName, "/FrontEnd/dist")));

app.get("/", (_, res) => {
  res.sendFile(path.resolve(_dirName, "FrontEnd", "dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
