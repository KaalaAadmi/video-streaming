import express from "express";
import { signUp, signIn, googleAuth } from "./../controllers/auth.js";

const router = express.Router();

// CREATE A USER
router.post("/sign-up", signUp);

// SIGN IN A USER
router.post("/sign-in", signIn);

// GOOGLE AUTH
router.post("/google", googleAuth);

export default router;
