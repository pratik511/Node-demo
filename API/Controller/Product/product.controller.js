const DB = require("../../Model");
const apiResponse = require("../../../utils/api.response");
const messages = require("../../../json/message.json");

module.exports = exports = {
  /* Create Productpost API */
  createBlogpost: async (req, res) => {
    const blogpost = await DB.PRODUCT.create(req.body);
    return apiResponse.OK({ res, message: messages.SUCCESS, data: blogpost });
  },

  getBlogpost: async (req, res) => {
    const productposts = await DB.PRODUCT.find({ isActive: true }).lean();

    return apiResponse.OK({
      res,
      message: messages.SUCCESS,
      data: {
        count: await DB.PRODUCT.countDocuments({ isActive: true }),
        data: productposts,
      },
    });
  },

  updateProductpost: async (req, res) => {
    let productpostExists = await DB.PRODUCT.findOne({
      _id: req.params.id,
      isActive: true,
    });
    if (!productpostExists)
      return apiResponse.NOT_FOUND({ res, message: messages.NOT_FOUND });

    const updateData = await DB.PRODUCT.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return apiResponse.OK({ res, message: messages.SUCCESS, data: updateData });
  },
  deleteProductpost: async (req, res) => {
    let productpostExists = await DB.PRODUCT.findOne({
      _id: req.params.id,
    }).lean();
    console.log("productpostExists", productpostExists);
    if (!productpostExists)
      return apiResponse.NOT_FOUND({ res, message: messages.NOT_FOUND });

    await DB.PRODUCT.findByIdAndUpdate(
      req.params.id,
      { isActive: !productpostExists.isActive },
      { new: true }
    );
    return apiResponse.OK({ res, message: messages.SUCCESS });
  },
};
