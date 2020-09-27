const { Schema, model } = require("mongoose");
// const moment = require("moment");

const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// friendCount virtual
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// created user model using userSchema
const User = model("User", userSchema);

// export user model
module.export = User;
