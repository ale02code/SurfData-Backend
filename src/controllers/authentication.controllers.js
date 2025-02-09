import { pool } from "../db.js";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken"

export const createClient = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(400).json({ message: "Name and password are required" });
  }

  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);

  const { rows } = await pool.query(
    'INSERT INTO login.clients (name, password) VALUES ($1, $2) RETURNING *',
    [name, hashedPassword]);

  res.json(rows[0]);
}

export const checkingData = async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res.status(400).json({
      status: "Error",
      message: "Campos vacios. Completalos antes de reenviar el formulario"
    });
  }

  try {
    const { rows } = await pool.query(
      'SELECT name, password FROM login.clients WHERE name = $1',
      [userName]);

    if (rows.length === 0) {
      return res.status(400).json({
        status: "Error",
        message: "Credenciales Incorrectas"
      });
    }

    const user = rows[0];
    const comparePasswords = await bcryptjs.compare(
      password, user.password
    )

    if (!comparePasswords) {
      return res.status(400).json({
        status: "Error",
        message: "Credenciales Incorrectas"
      });
    }

    const token = jwt.sign({
      name: userName
    },
      process.env.JWT_CODE,
      {
        expiresIn: "7d"
      }
    );

    res.status(200).json({
      status: "Success",
      message: `Usuario ${userName} autenticado.`,
      token: token,
    });
  } catch (error) {
    console.error(`Error en la autenticación: ${e}`);
    res.status(500).json({
      status: "Error",
      message: "Error en la autenticación.",
    })
  }
}