import User from "../../../database/model/user.js";

export default async (username) => {
  try {
    return await User.findOne({ username });
  } catch (error) {
    console.log(error);
    throw error;
  }
};