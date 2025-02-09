import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {

  let token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ error: "Token not provided" });
  }

  token = token.split(" ")[1]

  try {
    const decode = jwt.verify(token, process.env.JWT_CODE);
    req.name = decode.name;

    next();
  } catch (error) {
    console.log(`Error invalid token: ${e}`);
    res.status(400).json({ Error: "Invalid token" })
  }
}