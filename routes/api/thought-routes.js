const router = require("express").Router();

const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thought-controller");

//set up GET all and POST at api/thoughts
router.route("/").get(getThoughts).post(createThought);

//set up GET one, PUT, and DELETE at api/thoughts/:id
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

module.exports = router;