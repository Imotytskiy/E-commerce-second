// const port = 4000;
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const cors = require("cors");
// const { error } = require("console");
// const { v4: uuidv4 } = require("uuid");

// app.use(express.json());
// app.use(cors());

// // Database Connection with MongoDB

// mongoose.connect(
//   "mongodb+srv://forbestkids:iAB1ycDNVBccMFMc@cluster0.w7cpy.mongodb.net/e-commerce"
// );
// // API Creation

// app.get("/", (req, res) => {
//   res.send("Express App is running");
// });

// // Image Storag Engine

// const storage = multer.diskStorage({
//   destination: "./upload/images",
//   filename: (req, file, cb) => {
//     return cb(
//       null,
//       `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });

// const upload = multer({ storage: storage });

// // create upload Endpoint for images
// app.use("/images", express.static("upload/images"));
// app.post("/upload", upload.single("product"), (req, res) => {
//   res.json({
//     success: 1,
//     image_url: `http://localhost:${port}/images/${req.file.filename}`,
//   });
// });

// const Product = mongoose.model("Product", {
//   _id: {
//     type: String,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   image: [
//     {
//       type: String,
//     },
//   ],
//   category: {
//     type: String,
//     required: true,
//   },
//   subCategory: {
//     type: String,
//   },
//   sizes: [
//     {
//       type: String,
//     },
//   ],
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   bestseller: {
//     type: Boolean,
//     default: false,
//   },
// });

// app.post("/addproduct", async (req, res) => {
//   try {
//     // Extract product data from request body
//     const productData = {
//       _id: uuidv4(),
//       name: req.body.name,
//       description: req.body.description,
//       price: req.body.price,
//       image: req.body.image,
//       category: req.body.category,
//       subCategory: req.body.subCategory,
//       sizes: req.body.sizes,
//       bestseller: req.body.bestseller,
//     };

//     // Create a new product instance
//     const product = new Product(productData);

//     // Save the product to the database
//     await product.save();

//     // Respond with the saved product
//     res.status(201).json(product);
//   } catch (error) {
//     // Handle any errors that occur
//     res.status(500).json({ message: "Error adding product", error });
//   }
// });

// app.post("/removeproduct", async (req, res) => {
//   try {
//     const result = await Product.findOneAndDelete({ _id: req.body._id });
//     if (result) {
//       res.json({
//         success: true,
//         message: `Product ${req.body._id} removed successfully`,
//       });
//     } else {
//       res.status(404).json({ success: false, message: "Product not found" });
//     }
//   } catch (error) {
//     res
//       .status(500)
//       .json({ success: false, message: "Error removing product", error });
//   }
// });

// //Creating API for get all products

// app.get("/allproducts", async (req, res) => {
//   try {
//     // Fetch all products from the database
//     const products = await Product.find({});

//     // Log the operation
//     console.log("All Products Fetched");

//     // Respond with the fetched products
//     res.status(200).json({
//       success: true,
//       message: "Products fetched successfully",
//       data: products,
//     });
//   } catch (error) {
//     // Handle any errors that occur
//     console.error("Error fetching products:", error);

//     res.status(500).json({
//       success: false,
//       message: "Error fetching products",
//       error: error.message,
//     });
//   }
// });

// app.listen(port, (error) => {
//   if (!error) {
//     console.log("Server Running on port" + port);
//   } else {
//     console.log("Error : " + error);
//   }
// });
const port = 4000;
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

// Database Connection with MongoDB
mongoose
  .connect(
    "mongodb+srv://forbestkids:iAB1ycDNVBccMFMc@cluster0.w7cpy.mongodb.net/e-commerce"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Multer Storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images", // Directory to save uploaded files
  filename: (req, file, cb) => {
    // Generate a unique filename
    const uniqueSuffix = `${Date.now()}${path.extname(file.originalname)}`;
    cb(null, `${file.fieldname}_${uniqueSuffix}`); // Format: fieldname_timestamp.ext
  },
});

const upload = multer({ storage: storage });
// Serve images statically
app.use("/images", express.static("upload/images"));

// Mongoose Product Schema
const Product = mongoose.model("Product", {
  _id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  images: [{ type: String }], // Updated to "images" array
  category: { type: String, required: true },
  subCategory: { type: String },
  sizes: [{ type: String }],
  date: { type: Date, default: Date.now },
  bestseller: { type: Boolean, default: false },
});

// Upload Image Endpoint
app.post("/upload", upload.single("product"), (req, res) => {
  try {
    res.json({
      success: 1,
      image_url: `http://localhost:${port}/images/${req.file.filename}`,
    });
  } catch (error) {
    console.error("Image upload failed:", error);
    res.status(500).json({ message: "Image upload failed", error });
  }
});

// Add Product Endpoint
app.post("/addproduct", async (req, res) => {
  try {
    console.log("Received product data:", req.body);

    // Validate required fields
    const { name, price, category } = req.body;
    if (!name || !price || !category) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // Extract and validate product data
    const productData = {
      _id: uuidv4(),
      name: req.body.name,
      description: req.body.description,
      price: Number(req.body.price), // Ensure price is a number
      images: req.body.image || [], // Ensure "images" matches the schema
      category: req.body.category,
      subCategory: req.body.subCategory,
      sizes: Array.isArray(req.body.sizes)
        ? req.body.sizes
        : JSON.parse(req.body.sizes || "[]"), // Ensure sizes is an array
      bestseller: req.body.bestseller === "true", // Convert to boolean
    };

    // Create and save new product
    const product = new Product(productData);
    await product.save();

    // Respond with the saved product
    res.status(201).json({ success: true, product });
  } catch (error) {
    console.error("Error adding product:", error);
    res
      .status(500)
      .json({ success: false, message: "Error adding product", error });
  }
});

app.post("/removeproduct", async (req, res) => {
  try {
    const result = await Product.findOneAndDelete({ _id: req.body._id });
    if (result) {
      res.json({
        success: true,
        message: `Product ${req.body._id} removed successfully`,
      });
    } else {
      res.status(404).json({ success: false, message: "Product not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error removing product", error });
  }
});

// Creating API for getting all products
app.get("/allproducts", async (req, res) => {
  try {
    const products = await Product.find({});
    console.log("All Products Fetched");
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching products",
      error: error.message,
    });
  }
});

// Start Server
app.listen(port, (error) => {
  if (!error) {
    console.log(`Server running on port ${port}`);
  } else {
    console.error("Error starting server:", error);
  }
});
