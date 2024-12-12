import { Request, Response } from "express";
import { User } from "../models/user";
import bcrypt from "bcrypt";
import generateToken from "../utils/generatetoken";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ message: "El usuario ya existe" });
      return;
    }

    const user = new User({ name, email, password });
    await user.save();

    const token = generateToken(user._id);
    res.json({ 
      message: "Usuario registrado con éxito",
      user: { name: user.name, email: user.email },
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al registrar usuario" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "Credenciales inválidas" });
      return;
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      res.status(400).json({ message: "Credenciales inválidas" });
      return;
    }

    const token = generateToken(user._id);
    res.json({
      message: "Inicio de sesión exitoso",
      user: { name: user.name, email: user.email },
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};
