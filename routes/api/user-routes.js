const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
} = require("../../controllers/user-controller");

//set up GET all and POST at api/users
router.route("/").get(getAllUsers);

//Set up GET one, PUT, and DELETE at api/users/:id
router.route("/:id").get(getUserById);

module.exports = router;
