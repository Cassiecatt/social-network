const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

//set up GET all and POST at api/users
router.route("/").get(getAllUsers).post(createUser);

//Set up GET one, PUT, and DELETE at api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// set up POST and DELETE for friends api/users/userId/friends/friendsId
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
