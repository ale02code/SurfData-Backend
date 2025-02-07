
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {

  let token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(401).json({ error: "Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_CODE);
    const companyToken = codeded.company;
    const companyUrl = req.params.companyUrl;

    if (companyToken !== companyUrl) {
      res.status(403).json({ error: "Token does not match company" });
    }

    next();
  } catch (error) {
    console.log(`Error invalid token: ${e}`);
    res.status(400).json({ Error: "Access denied" })
  }
}