import express from "express";
import { login, register } from "../services/userServices";

const router = express.Router();

// register for new user
router.post("/register", async (req, res) => {
  const { firstName, lastName, userName, email, password, country, phone } =
    req.body;
  try {
    const { data, statusCode } = await register({
      firstName,
      lastName,
      userName,
      email,
      password,
      country,
      phone,
    });

    if (201 !== statusCode) {
      res.status(statusCode).json(data);
      return;
    }

    res.status(statusCode).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// login for existing user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const { data, statusCode } = await login({ email, password });

    if (200 !== statusCode) {
      res.status(statusCode).json(data);
      return;
    }

    res.status(statusCode).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
