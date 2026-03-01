import findUserByUsername from "../../src/user/lib/find.user.by.username.js";
import { verifyToken } from "../jwt/jwt.js";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);
    const user = await findUserByUsername(decoded.username)
    if(!user) return res.status(404).json({message: "User not found"})
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};