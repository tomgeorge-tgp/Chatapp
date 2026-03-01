import findUserByUsername from "./lib/find.user.by.username.js";
import createUser from "./lib/create.user.js";
import { createToken } from "../../shared/jwt/jwt.js";

export default async (req, res) => {
  const { username } = req.body;

  const existingUser = await findUserByUsername(username);
  const token = createToken({ username });

  if (existingUser) {
    return res.status(200).json({
      success: true,
      message: "Username already exists",
      token
    });
  }

  const newUser = await createUser({ username });

  return res.status(201).json({
    success: true,
    data: newUser,
    token
  });
};