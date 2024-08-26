const jwt = require("jsonwebtoken");

function generateJWT(id, name) {
  return new Promise((res, rej) => {
    const payload = { id, name };
    
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
