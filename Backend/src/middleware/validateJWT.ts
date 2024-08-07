import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ExtendedRequest, payloadTypes } from "../types/generalTypes";
import { userModel } from "../models/userModel";
import dotenv from "dotenv";
dotenv.config();

const validateJWT = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      res.status(403).json("Authorization header is not provided!");
      return;
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      res.status(403).json("Token is not provided!");
      return;
    }

    jwt.verify(
      token,
      process.env.JWT_SECRET_KEY || "",
      async (err, payload) => {
        if (err) {
          res.status(403).json(err);
          return;
        }

        if (!payload) {
          res.status(403).json("Invalid Token!");
          return;
        }

        const userPayload = payload as payloadTypes;

        const user = await userModel.findOne({
          email: userPayload.email,
          userName: userPayload.userName,
        });

        req.user = user;
        next();
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
};

export default validateJWT;
