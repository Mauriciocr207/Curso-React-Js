const jwt = require("jsonwebtoken");

function generateJWT(uid, name) {
  return new Promise((res, rej) => {
    const payload = { uid, name };
    
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: "2h",
      },
      (err, token) => err ? rej(err) : res(token)
    );
  });
}

module.exports = {
    generateJWT
};
