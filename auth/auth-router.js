const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-models");

router.post("/register", validateUser, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  Users.add(user)
    .then(saved => {
      res.status(201).json({ user: saved });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", validateUserLogin, (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function validateUser(req, res, next) {
  if (!Object.keys(req.body).length) {
    res.status(404).json({ message: "missing user data" });
  } else if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(404).json({
      message:
        "missing required text field, please check username, email or password fields"
    });
  } else {
    next();
  }
}

function validateUserLogin(req, res, next) {
  if (!Object.keys(req.body).length) {
    res.status(404).json({ message: "missing user data" });
  } else if (!req.body.username ||!req.body.password) {
    res.status(404).json({
      message:
        "missing required text field, please check username or password fields"
    });
  } else {
    next();
  }
}

function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.username,
    department: user.department
  };
  const options = {
    expiresIn: "1d"
  };

  const result = jwt.sign(payload, process.env.JWT_SECRET, options);

  return result;
}

module.exports = router;
