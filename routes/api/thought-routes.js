const router = require("express").Router();

const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");


//set up GET all and POST at api/thoughts
router.route("/").get(getThoughts).post(createThought);

//set up GET one, PUT, and DELETE at api/thoughts/:id
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

//set up POST for reaction at /api/thoughts/:id/reactions
router.route('/:id/reactions').post(addReaction)

//set up DELETE for reaction at /api/thoughts/:id/reactions/:reactionId
router.route('/:id/reactions/:reactionId').delete(deleteReaction);

module.exports = router;