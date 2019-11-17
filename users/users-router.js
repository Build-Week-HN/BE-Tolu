const router = require("express").Router();

const Users = require("./users-models");
const restricted = require("../auth/restricted-middleware");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
