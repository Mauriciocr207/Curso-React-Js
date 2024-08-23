const jwt = require("jsonwebtoken");

function validateJWT(req, res, next) {
  try {
    const bearerJWT = req.header("Authorization");

    if (!bearerJWT || !bearerJWT.startsWith('Bearer')) {
      throw { status: 401, message: "No token provided" };
    }

    const token = bearerJWT.substring(7, bearerJWT.length);    

    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);

    req.uid = uid;
    req.name = name;

    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        ok: false,
        error: { status: 401, message: "invalid jason web token" },
      });
    }

    return res.status(error.status || 500).json({
      ok: false,
      error,
    });
  }
}

module.exports = validateJWT;
