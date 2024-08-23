const { hashString, compareStrings, generateJWT } = require("../helpers");
const { UserModel } = require("../models");

class AuthController {
  static async register(req, res) {
    try {
      const { email } = req.body;
      const user = await UserModel.findOne({ email });

      if (user) {
        throw { status: 400, message: "Este usuario ya existe" };
      }

      const newUser = new UserModel(req.body);

      newUser.pass = hashString(newUser.pass);

      await newUser.save();

      res.json({
        ok: true,
        uid: newUser.id,
        name: newUser.name,
      });
    } catch (error) {
      res.status(error.status).json({
        ok: false,
        error,
      });
    }
  }

  static async login(req, res) {
    try {
      const defualtErrorMessage = "Usuario o contraseña incorrectos";
      const { name, email, pass } = req.body;
      const user = await UserModel.findOne({ email });

      if (!user) {
        throw { status: 400, message: defualtErrorMessage };
      }

      const passwordValidated = compareStrings(pass, user.pass);

      if (!passwordValidated) {
        throw { status: 400, message: defualtErrorMessage };
      }

      const token = await generateJWT(user.id, user.name);

      res.json({
        ok: true,
        uid: user.id,
        name: user.name,
        token,
      });
    } catch (error) {
      res.status(error.status).json({
        ok: false,
        error,
      });
    }
  }

  static validateToken(req, res) {
    res.json({ ok: true, message: "validate token" });
  }

  static async reValidateToken(req, res) {
    try {
      const { uid, name } = req;

      const token = await generateJWT(uid, name);

      res.json({
        ok: true,
        uid,
        name,
        token,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        error: {
          status: 500,
          message: "Error al realizar esta operación"
        }
      })
    }
  }
}

module.exports = AuthController;
