const DB = require("../../Model");
const helper = require("../../../utils/utils");
const apiResponse = require("../../../utils/api.response");
const messages = require("../../../json/message.json");

module.exports = exports = {
  /* Create Productpost API */
  createUserpost: async (req, res) => {
    if (
      await DB.USER.findOne({
        $or: [{ email: req.body.email }, { userName: req.body.userName }],
      }).lean()
    )
      return apiResponse.BAD_REQUEST({
        res,
        message: messages.USER_ALREADY_EXISTS,
      });

    const userpost = await DB.USER.create(req.body);
    return apiResponse.OK({ res, message: messages.SUCCESS, data: userpost });
  },
  loginUser: async (req, res) => {
    const user = await DB.USER.findOne({
      $or: [{ email: req.body.email }, { userName: req.body.userName }],
      isActive: true,
    }).lean();
    if (!user)
      return apiResponse.NOT_FOUND({ res, message: messages.USER_NOT_FOUND });

    const isPasswordMatch = await helper.comparePassword({
      password: req.body.password,
      hash: user.password,
    });
    if (!isPasswordMatch)
      return apiResponse.BAD_REQUEST({
        res,
        message: messages.INVALID_PASSWORD,
      });

    const token = helper.generateToken({
      data: { _id: user._id, email: user.email },
    });

    return apiResponse.OK({
      res,
      message: messages.SUCCESS,
      data: { data: user, token: token },
    });
  },
  getUser: async (req, res) => {
    const user = await DB.USER.find({ isActive: true }).lean();

    return apiResponse.OK({
      res,
      message: messages.SUCCESS,
      data: {
        data: user,
        count: await DB.USER.countDocuments({ isActive: true }),
      },
    });
  },
};
