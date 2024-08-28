// import React, { useState } from "react";
// import upload_area from "../assets/upload_area.png";

// const AddProduct = () => {
//   const [image, setImage] = useState(false);
//   const imageHandler = (e) => {
//     setImage(e.target.files[0]);
//   };
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: "",
//     category: "Men",
//     subCategory: "Topwear",
//     sizes: [],
//     bestseller: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]:
//         type === "checkbox" ? checked : type === "file" ? files[0] : value,
//     });
//   };

//   const handleSizeSelect = (size) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       sizes: prevData.sizes.includes(size)
//         ? prevData.sizes.filter((s) => s !== size)
//         : [...prevData.sizes, size],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(formData);

//     // Submit form data to API or handle it accordingly
//   };
//   const Add_Product = async () => {
//     console.log(formData);
//     let responsData;
//     let product = productDetails;

//     let formData = new FormData();
//     form.Data.append("product", image);

//     await fetch("http://localhost:4000/upload", {
//       method: "POST",
//       headers: {
//         Accept: "aplication/json",
//       },
//       body: formData,
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         responsData = data;
//       });
//   };
//   if (responsData.success) {
//     product.image = responsData.image_url;
//     console.log(product);
//   }
//   // const triggerFileInput = () => {
//   //   document.getElementById("file-input").click();
//   // };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col w-full items-start gap-3"
//     >
//       <p class="mb-2">Upload Image</p>
//       <div className="flex gap-2">
//         <label htmlFor="file-input">
//           <img
//             className="w-20"
//             src={image ? URL.createObjectURL(image) : upload_area}
//           />
//         </label>
//         <input
//           onChange={imageHandler}
//           type="file"
//           name="image"
//           id="file-input"
//         />
//       </div>

//       <div>
//         <label>Product Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Type here"
//           required
//           className="border p-2 rounded w-full"
//         />
//       </div>

//       <div>
//         <label>Description</label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           placeholder="Type here"
//           className="border p-2 rounded w-full"
//         />
//       </div>

//       <div>
//         <label>Price</label>
//         <input
//           type="number"
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//           placeholder="Type here"
//           required
//           className="border p-2 rounded w-full"
//         />
//       </div>

//       <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
//         <div>
//           <p className="mb-2">Product Category</p>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full px-3 py-2"
//           >
//             <option value="Men">Men</option>
//             <option value="Women">Women</option>
//             <option value="Kids">Kids</option>
//           </select>
//         </div>
//         <div>
//           <p className="mb-2">Sub Category</p>
//           <select
//             name="subCategory"
//             value={formData.subCategory}
//             onChange={handleChange}
//             className="w-full px-3 py-2"
//           >
//             <option value="Topwear">Topwear</option>
//             <option value="Bottomwear">Bottomwear</option>
//             <option value="Winterwear">Winterwear</option>
//           </select>
//         </div>
//       </div>

//       <div>
//         <p className="mb-2">Product Sizes</p>
//         <div className="flex gap-3">
//           {["S", "M", "L", "XL", "XXL"].map((size) => (
//             <div key={size}>
//               <p
//                 className={`bg-slate-200 px-3 py-1 cursor-pointer ${
//                   formData.sizes.includes(size) ? "bg-blue-500 text-white" : ""
//                 }`}
//                 onClick={() => handleSizeSelect(size)}
//               >
//                 {size}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex gap-2 mt-2">
//         <input
//           type="checkbox"
//           id="bestseller"
//           name="bestseller"
//           checked={formData.bestseller}
//           onChange={handleChange}
//         />
//         <label className="cursor-pointer" htmlFor="bestseller">
//           Add to bestseller
//         </label>
//       </div>

//       <button
//         onClick={() => {
//           Add_Product();
//         }}
//         type="submit"
//         className="w-28 py-3 mt-4 bg-black text-white"
//       >
//         ADD
//       </button>
//     </form>
//   );
// };

// export default AddProduct;

// import React, { useState } from "react";
// import upload_area from "../assets/upload_area.png";

// const AddProduct = () => {
//   const [image, setImage] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "Men",
//     subCategory: "Topwear",
//     sizes: [],
//     bestseller: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });

//     if (type === "file") {
//       setImage(files[0]);
//     }
//   };

//   const handleSizeSelect = (size) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       sizes: prevData.sizes.includes(size)
//         ? prevData.sizes.filter((s) => s !== size)
//         : [...prevData.sizes, size],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create FormData instance
//     const formDataToSend = new FormData();
//     formDataToSend.append("name", formData.name);
//     formDataToSend.append("description", formData.description);
//     formDataToSend.append("price", formData.price);
//     formDataToSend.append("category", formData.category);
//     formDataToSend.append("subCategory", formData.subCategory);
//     formDataToSend.append("sizes", JSON.stringify(formData.sizes));
//     formDataToSend.append("bestseller", formData.bestseller.toString());
//     if (image) {
//       formDataToSend.append("product", image);
//     }

//     try {
//       const response = await fetch("http://localhost:4000/upload", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//         },
//         body: formDataToSend,
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const responseData = await response.json();
//       console.log(responseData);

//       if (responseData.success) {
//         // Assuming responseData.image_url contains the URL of the uploaded image
//         setImage(responseData.image_url); // Update image state with URL
//       }
//     } catch (error) {
//       console.error("There was a problem with the fetch operation:", error);
//     }
//   };

//   const triggerFileInput = () => {
//     document.getElementById("file-input").click();
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col w-full items-start gap-3"
//     >
//       <p className="mb-2">Upload Image</p>
//       <div className="flex gap-2">
//         <label htmlFor="file-input" onClick={triggerFileInput}>
//           <img
//             className="w-20"
//             src={image ? URL.createObjectURL(image) : upload_area}
//             alt="Upload Area"
//           />
//         </label>
//         <input
//           onChange={handleChange}
//           type="file"
//           name="image"
//           id="file-input"
//           style={{ display: "none" }}
//         />
//       </div>

//       <div>
//         <label>Product Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Type here"
//           required
//           className="border p-2 rounded w-full"
//         />
//       </div>

//       <div>
//         <label>Description</label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           placeholder="Type here"
//           className="border p-2 rounded w-full"
//         />
//       </div>

//       <div>
//         <label>Price</label>
//         <input
//           type="number"
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//           placeholder="Type here"
//           required
//           className="border p-2 rounded w-full"
//         />
//       </div>

//       <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
//         <div>
//           <p className="mb-2">Product Category</p>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full px-3 py-2"
//           >
//             <option value="Men">Men</option>
//             <option value="Women">Women</option>
//             <option value="Kids">Kids</option>
//           </select>
//         </div>
//         <div>
//           <p className="mb-2">Sub Category</p>
//           <select
//             name="subCategory"
//             value={formData.subCategory}
//             onChange={handleChange}
//             className="w-full px-3 py-2"
//           >
//             <option value="Topwear">Topwear</option>
//             <option value="Bottomwear">Bottomwear</option>
//             <option value="Winterwear">Winterwear</option>
//           </select>
//         </div>
//       </div>

//       <div>
//         <p className="mb-2">Product Sizes</p>
//         <div className="flex gap-3">
//           {["S", "M", "L", "XL", "XXL"].map((size) => (
//             <div key={size}>
//               <p
//                 className={`bg-slate-200 px-3 py-1 cursor-pointer ${
//                   formData.sizes.includes(size) ? "bg-blue-500 text-white" : ""
//                 }`}
//                 onClick={() => handleSizeSelect(size)}
//               >
//                 {size}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex gap-2 mt-2">
//         <input
//           type="checkbox"
//           id="bestseller"
//           name="bestseller"
//           checked={formData.bestseller}
//           onChange={handleChange}
//         />
//         <label className="cursor-pointer" htmlFor="bestseller">
//           Add to bestseller
//         </label>
//       </div>

//       <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
//         ADD
//       </button>
//     </form>
//   );
// };

// export default AddProduct;

// import React, { useState } from "react";
// import upload_area from "../assets/upload_area.png";

// const AddProduct = () => {
//   const [image, setImage] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "Men",
//     subCategory: "Topwear",
//     sizes: [],
//     bestseller: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });

//     if (type === "file") {
//       setImage(files[0]);
//     }
//   };

//   const handleSizeSelect = (size) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       sizes: prevData.sizes.includes(size)
//         ? prevData.sizes.filter((s) => s !== size)
//         : [...prevData.sizes, size],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create FormData instance
//     const formDataToSend = new FormData();
//     formDataToSend.append("name", formData.name);
//     formDataToSend.append("description", formData.description);
//     formDataToSend.append("price", formData.price);
//     formDataToSend.append("category", formData.category);
//     formDataToSend.append("subCategory", formData.subCategory);
//     formDataToSend.append("sizes", JSON.stringify(formData.sizes));
//     formDataToSend.append("bestseller", formData.bestseller.toString());
//     if (image) {
//       formDataToSend.append("product", image);
//     }

//     try {
//       const response = await fetch("http://localhost:4000/upload", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//         },
//         body: formDataToSend,
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const responseData = await response.json();
//       console.log(responseData);

//       if (responseData.success) {
//         // Assuming responseData.image_url contains the URL of the uploaded image
//         setImage(responseData.image_url); // Update image state with URL
//       }
//     } catch (error) {
//       console.error("There was a problem with the fetch operation:", error);
//     }
//   };

//   const triggerFileInput = () => {
//     document.getElementById("file-input").click();
//   };

// import React, { useState } from "react";
// import upload_area from "../assets/upload_area.png";

// // const triggerFileInput = () => {
// //   document.getElementById("file-input").click();
// // };

// const AddProduct = () => {
//   const [image, setImage] = useState(false);

//   const [productDetails, setProductDetails] = useState({
//     name: "",
//     // description: "",
//     price: "",
//     image: "",
//     category: "Men",
//     // subCategory: "Topwear",
//     // sizes: [],
//     // bestseller: false,
//   });

//   const Add_Product = async () => {
//     let responseData;
//   let product = productDetails;
//     console.log(productDetails);
//     let formData = new FormData();
//     formData.append("product", image);
//     await fetch("http://localhost:4000/upload", {
//       method: "POST",
//       headers: {
//         Accept: "aplication/json",
//       },
//       body: formData,
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         responseData = data;
//       });
//   };
//   if (responseData.success) {
//     product.image = response.image_url;
//     console.log(product);
//   }
//   const imageHandler = (e) => {
//     setImage(e.target.files[0]);
//   };
//   const changeHandler = (e) => {
//     setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className=" flex flex-col w-full items-start gap-3">
//       <div className="">
//         <p>Назва речі</p>
//         <input
//           value={productDetails.name}
//           onChange={changeHandler}
//           type="text"
//           name="name"
//           placeholder="Type here"
//         />
//       </div>
//       <div className="">
//         <p>Price</p>
//         <input
//           value={productDetails.price}
//           onChange={changeHandler}
//           type="text"
//           name="price"
//           placeholder="Type here"
//         />
//       </div>
//       <div className="">
//         <p>Description</p>
//         <input
//           value={productDetails.description}
//           onChange={changeHandler}
//           type="text"
//           name="description"
//           placeholder="Type here"
//         />
//       </div>
//       <div className="">
//         <p>Category</p>
//         <select
//           value={productDetails.category}
//           onChange={changeHandler}
//           name="category"
//           className=""
//         >
//           <option value="boys">Boys</option>
//           <option value="girls">Girls</option>
//           <option value="kids">Kids</option>
//         </select>
//       </div>
//       <div className="flex gap-2">
//         <label htmlFor="file-input">
//           <img
//             className="w-40 h-40"
//             src={image ? URL.createObjectURL(image) : upload_area}
//             alt="Upload Area"
//           />
//         </label>
//         <input
//           onChange={imageHandler}
//           type="file"
//           name="image"
//           id="file-input"
//           hidden
//         />
//       </div>
//       <button
//         onClick={() => {
//           Add_Product();
//         }}
//         className="w-28 py-3 mt-4 bg-black text-white"
//       >
//         ADD
//       </button>
//     </div>
//   );
// };

// export default AddProduct;
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
