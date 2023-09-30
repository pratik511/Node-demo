const { Schema, model } = require("mongoose");
const message = require("../../json/message.json");
const { logger } = require("../../utils/logger");
const { hash } = require("bcryptjs");

const UserSchema = new Schema(
  {
    email: { type: String, required: true },
    userName: { type: String },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.pre("save", async function (next) {
  try {
    const user = this;

    if (user.isModified("password") || user.isNew) {
      this.password = await hash(user.password, 10);
      next();
    } else {
      next();
    }
  } catch (error) {
    logger.error(`PRE SAVE ERROR: ${error}`);
    return Promise.reject(message.INTERNAL_SERVER_ERROR);
  }
});

UserSchema.set("toJSON", {
  transform: function (doc, ret, opt) {
    delete ret["password"];
    return ret;
  },
});

let userpostModel = model("userpost", UserSchema, "userpost");
module.exports = userpostModel;
