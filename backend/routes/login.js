const { Router } = require("express");
const router = Router();
const { login } = require("../controllers/users");

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await login(email, password);

    if (!token) {
      return res.status(401).send({ mensagem: "E-mail ou senha inválidos" });
    }

    res.send({ token });
  } catch (error) {
    res.status(500).send({ mensagem: error.message });
  }
});

module.exports = router;
