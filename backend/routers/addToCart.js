const router = require("express").Router();
const Cart = require("../models/addToCart")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// Add to cart
router.post("/", async (req, res)=>{
  try{
      const {email, productName, quantity, calculatedPrice } = req.body;

      const newCart = new Cart({
        email, productName, quantity, calculatedPrice
      });

      const savedUser = await newCart.save();

  } catch (err) {
      console.error(err);
      res.status(500).send(); 
  }
});



module.exports = router;