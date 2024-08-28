import React, { useState } from "react";
import upload_area from "../assets/upload_area.png";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "Men",
  });

  const Add_Product = async () => {
    let responseData;
    const formData = new FormData();
    formData.append("product", image); // Ensure this name matches your multer field

    // You can add other product details to the formData if needed
    formData.append("name", productDetails.name);
    formData.append("price", productDetails.price);
    formData.append("category", productDetails.category);
    formData.append("description", productDetails.description);

    try {
      const response = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        responseData = await response.json();
      } else {
        console.error("Server error:", response.statusText);
        return;
      }

      if (responseData.success) {
        const updatedProduct = {
          ...productDetails,
          image: responseData.image_url,
        };
        console.log(updatedProduct);
        // Here you can send this `updatedProduct` to the backend to save the product details
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className=" flex flex-col w-full items-start gap-3">
      <div className="">
        <p>Назва речі</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="">
        <p>Price</p>
        <input
          value={productDetails.price}
          onChange={changeHandler}
          type="text"
          name="price"
          placeholder="Type here"
        />
      </div>
      <div className="">
        <p>Description</p>
        <input
          value={productDetails.description}
          onChange={changeHandler}
          type="text"
          name="description"
          placeholder="Type here"
        />
      </div>
      <div className="">
        <p>Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className=""
        >
          <option value="boys">Boys</option>
          <option value="girls">Girls</option>
          <option value="kids">Kids</option>
        </select>
      </div>
      <div className="flex gap-2">
        <label htmlFor="file-input">
          <img
            className="w-40 h-40"
            src={image ? URL.createObjectURL(image) : upload_area}
            alt="Upload Area"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        onClick={Add_Product}
        className="w-28 py-3 mt-4 bg-black text-white"
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
