const mongoose = require("mongoose");

const addToCart = new mongoose.Schema({
  email: {
    type: String
  },
  productName: { 
    type: String
  },
  quantity: { 
    type: Number
  },
  calculatedPrice:{
    type:Number
  }
});

const Cart = mongoose.model("cart", addToCart);

module.exports = Cart;