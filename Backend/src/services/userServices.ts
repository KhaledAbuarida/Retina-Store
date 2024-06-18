import { userModel } from "../models/userModel";
import { loginUserProps, registerProps } from "../types/userServicesProps";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const register = async ({
  userName,
  firstName,
  lastName,
  phone,
  country,
  email,
  password,
}: registerProps) => {
  try {
    // check if user is existing or not
    const userByEmail = await userModel.findOne({ email });
    const userByName = await userModel.findOne({ userName });

    // check if email or username is exist
    if (userByEmail || userByName) {
      // return boolean values if the username or email exist
      return {
        data: {
          username: !!userByName,
          email: !!userByEmail,
        },
        statusCode: 403,
      };
    }

    // create new user
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await userModel.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
      phone,
      country,
    });

    await user.save();

    return {
      data: {
        token: generateJWT({ email, userName }),
        username: user.userName,
      },
      statusCode: 201,
    };
  } catch (err) {
    return { data: err, statusCode: 500 };
  }
};

export const login = async ({ email, password }: loginUserProps) => {
  try {
    // check if user is exist or not
    const user = await userModel.findOne({ email });

    // if user doesn't exist
    if (!user) {
      return { data: "Wrong email or password!", statusCode: 403 };
    }

    const passwordMatching = await bcrypt.compare(password, user.password);

    if (!passwordMatching) {
      return { data: "Wrong email or password!", statusCode: 403 };
    }

    return {
      data: {
        token: generateJWT({ email, userName: user.userName }),
        username: user.userName,
      },
      statusCode: 200,
    };
  } catch (err) {
    return { data: err, statusCode: 500 };
  }
};

// generate jsonwebtoken
const generateJWT = (data: any) => {
  try {
    return jwt.sign(data, process.env.SECRET_KEY || "");
  } catch (err) {
    return err;
  }
};
