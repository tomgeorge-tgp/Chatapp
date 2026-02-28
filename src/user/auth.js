import findUserByUsername from "./lib/find.user.by.username.js";
import createUser from "./lib/create.user.js";

export default async (req, res) => {
  const { username } = req.body;

  const existingUser = await findUserByUsername(username);

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "Username already exists",
    });
  }

  const newUser = await createUser({ username });

  return res.status(201).json({
    success: true,
    data: newUser,
  });
};