const Product = require("../model/Product.model")
const fs = require('fs');


class ProductController {
    async insertProducts (req, res) {
       try {
         const productPath = './data/product.json'
         const result = fs.readFileSync(productPath)
 
         const products = JSON.parse(result)
 
         await Product.insertMany(products)
 
         console.log(products)
 
         res.status(200).json({message: "Product created successfully", createdProducts: products})
       } catch (error) {
        res.status(500).json({error: error})
       }
    }

    async getAllProducts (req, res) {
      try {
        const {name, id} = req.query
        let filterQuery = {}
        if(name) {
          filterQuery.name = { $regex: name, $options: "i" };
        }
        if(id) {
          filterQuery._id = id;
        }
        let products = await Product.find(filterQuery)
        res.status(200).json({products: products})
      } catch (error) {
        res.status(500).json({error: error.message})
      }
    }
}

module.exports = new ProductController  