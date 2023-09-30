module.exports = {
  PODUCTPOST: {
    APIS: require("./Product/product.controller"),
    VALIDATOR: require("./Product/product.validator")
  },
  USERPOST: {
    APIS: require("./User/user.controller"),
    VALIDATOR: require("./User/user.validator")
  },
};
