const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: [],
    required: true,
  },
  Description:{
    type:String,
    required:[true,'Description not entered'],
  },
  Contents:{
    type:[],
    required:[true,"contents are required"],
  }
});

module.exports = mongoose.model('Product', ProductSchema);
