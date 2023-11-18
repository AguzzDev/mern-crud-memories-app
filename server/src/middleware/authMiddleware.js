import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  jwt.verify(
    token.replace("Bearer ", ""),
    process.env.JWT_SECRET,
    (err, decodedToken) => {
      if (err) {
        return res
          .status(401)
          .json({ message: "Token inválido. Acceso no autorizado." });
      }

      req.me = {
        id: req.headers.user_id,
        name: req.headers.user_name,
      };

      next();
    }
  );
};
