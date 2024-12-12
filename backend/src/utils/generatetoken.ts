import jwt from "jsonwebtoken";

const generateToken = (id: any) => {
  const secret = process.env.JWT_SECRET || "secreto";
  return jwt.sign({ id }, secret, { expiresIn: "7d" });
};

export default generateToken;
