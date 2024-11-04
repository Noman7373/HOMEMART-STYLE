import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserController from "../controllers/userController.js";
import checkUserAuth from "../middlewares/auth-middleware.js";

// Load environment variables from .env file
dotenv.config({ path: ".env" });

// let handlCors;
const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

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

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
