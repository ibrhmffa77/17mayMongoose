const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    image: {
        type: String,
       
    },
    name: {
        type: String,
    
    },
    date: {
        type: String,
       
    },
    title: {
        type: String,
      
    },
    content: {
        type: String,
    }
})
const Products = mongoose.model("Products", productSchema)
module.exports = Products