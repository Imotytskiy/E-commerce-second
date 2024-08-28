// import React, { useState } from "react";
// import upload_area from "../assets/upload_area.png";

// const AddProduct = () => {
//   const [image, setImage] = useState(null);
//   const [productDetails, setProductDetails] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: "",
//     category: "Men",
//     subCategory: "",
//     sizes: "",
//     bestseller: false,
//   });

//   const Add_Product = async () => {
//     let responseData;
//     const formData = new FormData();
//     formData.append("product", image); // Ensure this name matches your multer field

//     // You can add other product details to the formData if needed
//     formData.append("name", productDetails.name);
//     formData.append("price", productDetails.price);
//     formData.append("category", productDetails.category);
//     formData.append("description", productDetails.description);

//     try {
//       const response = await fetch("http://localhost:4000/upload", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//         },
//         body: formData,
//       });

//       if (response.ok) {
//         responseData = await response.json();
//       } else {
//         console.error("Server error:", response.statusText);
//         return;
//       }

//       if (responseData.success) {
//         const updatedProduct = {
//           ...productDetails,
//           image: [responseData.image_url],
//         };

//         console.log(updatedProduct);

//         // Here you can send this `updatedProduct` to the backend to save the product details
//         const productResponse = await fetch(
//           "http://localhost:4000/addproduct",
//           {
//             method: "POST",
//             headers: {
//               Accept: "application/json",
//               "Content-Type": "application/json", // Corrected typo
//             },
//             body: JSON.stringify(updatedProduct),
//           }
//         );

//         const productData = await productResponse.json();

//         if (productData.success) {
//           console.log("Product added successfully:", productData.product);
//           // You can reset the form or show a success message here
//         } else {
//           console.error("Failed to add product:", productData.message);
//         }
//       }
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   const imageHandler = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const changeHandler = (e) => {
//     setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//   };
//   // I cant see url at mongo db data.image

//   return (
//     <div className=" flex flex-col w-full items-start gap-3">
//       <div className="w-full">
//         <p className="mb-2">Назва речі</p>
//         <input
//           className="w-full max-w-[500px] px-3 py-2 border-2"
//           value={productDetails.name}
//           onChange={changeHandler}
//           type="text"
//           name="name"
//           placeholder="Type here"
//           required
//         />
//       </div>
//       <div className="w-full">
//         <p className="mb-2">Description</p>
//         <textarea
//           className="w-full max-w-[600px] px-3 py-2 border-2"
//           value={productDetails.description}
//           onChange={changeHandler}
//           type="text"
//           name="description"
//           placeholder="Write content"
//         />
//       </div>
//       <div className="">
//         <p className="mb-2">Category</p>
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

//       <p mb-2>Sub category</p>
//       <select
//         classNamew-full
//         px-3
//         py-2
//         value={productDetails.subCategory}
//         onChange={changeHandler}
//         name="subCategory"
//         className=""
//       >
//         <option value="Topwear">Topwear</option>
//         <option value="Bootomwear">Bottomwear</option>
//         <option value="Winterwear">Winterwear</option>
//       </select>

//       <div className="w-full">
//         <p mb-2>Product price</p>
//         <input
//           className="w-full px-3 py-2 sm:w-[120px]"
//           value={productDetails.price}
//           onChange={changeHandler}
//           type="number"
//           name="price"
//           placeholder="Type here"
//         />
//       </div>

//       <div className="">
//         <div>
//           <p className="mb-2">Product Sizes</p>
//           <div className="flex gap-3">
//             <div>
//               <p
//                 onClick={() => {}}
//                 className="bg-slate-200 px-3 py-1 cursor-pointer"
//               >
//                 S
//               </p>
//             </div>
//             <div>
//               <p
//                 onClick={() => {}}
//                 className="bg-slate-200 px-3 py-1 cursor-pointer"
//               >
//                 M
//               </p>
//             </div>
//             <div>
//               <p
//                 onClick={() => {}}
//                 className="bg-slate-200 px-3 py-1 cursor-pointer"
//               >
//                 L
//               </p>
//             </div>
//             <div>
//               <p
//                 onClick={() => {}}
//                 className="bg-slate-200 px-3 py-1 cursor-pointer"
//               >
//                 XL
//               </p>
//             </div>
//             <div>
//               <p
//                 onClick={() => {}}
//                 className="bg-slate-200 px-3 py-1 cursor-pointer"
//               >
//                 XXL
//               </p>
//             </div>
//           </div>
//           <div className="flex gap-2 mt-2">
//             <input type="checkbox" id="bestseller" />
//             <label className="cursor-pointer" for="bestseller">
//               Add to bestseller
//             </label>
//           </div>
//         </div>
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
//         onClick={Add_Product}
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
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    price: "",
    category: "Men",
    subCategory: "",
    bestseller: false,
  });

  const handleSizeClick = (size) => {
    setSelectedSizes(
      (prevSizes) =>
        prevSizes.includes(size)
          ? prevSizes.filter((s) => s !== size) // Remove size if already selected
          : [...prevSizes, size] // Add size if not already selected
    );
  };

  const Add_Product = async () => {
    let responseData;
    const formData = new FormData();
    formData.append("product", image); // Ensure this name matches your multer field

    // Append product details to formData
    formData.append("name", productDetails.name);
    formData.append("price", productDetails.price);
    formData.append("category", productDetails.category);
    formData.append("description", productDetails.description);
    formData.append("sizes", JSON.stringify(selectedSizes)); // Convert sizes array to JSON string
    formData.append("bestseller", productDetails.bestseller);

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
          image: [responseData.image_url],
          sizes: selectedSizes, // Include sizes in the product data
        };

        // Send the product data to the backend
        const productResponse = await fetch(
          "http://localhost:4000/addproduct",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
          }
        );

        const productData = await productResponse.json();

        if (productData.success) {
          console.log("Product added successfully:", productData.product);
          // Reset the form or show a success message here
        } else {
          console.error("Failed to add product:", productData.message);
        }
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
    <div className="flex flex-col w-full items-start gap-3">
      <div className="w-full">
        <p className="mb-2">Назва речі</p>
        <input
          className="w-full max-w-[500px] px-3 py-2 border-2"
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Description</p>
        <textarea
          className="w-full max-w-[600px] px-3 py-2 border-2"
          value={productDetails.description}
          onChange={changeHandler}
          name="description"
          placeholder="Write content"
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="px-3 py-2 border-2"
        >
          <option value="boys">Boys</option>
          <option value="girls">Girls</option>
          <option value="kids">Kids</option>
        </select>
      </div>

      <div className="w-full">
        <p className="mb-2">Sub category</p>
        <select
          className="w-full px-3 py-2 border-2"
          value={productDetails.subCategory}
          onChange={changeHandler}
          name="subCategory"
        >
          <option value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="Winterwear">Winterwear</option>
        </select>
      </div>

      <div className="w-full">
        <p className="mb-2">Product price</p>
        <input
          className="w-full px-3 py-2 border-2"
          value={productDetails.price}
          onChange={changeHandler}
          type="number"
          name="price"
          placeholder="Type here"
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div key={size}>
              <p
                onClick={() => handleSizeClick(size)}
                className={`bg-slate-200 px-3 py-1 cursor-pointer ${
                  selectedSizes.includes(size) ? "bg-blue-500 text-white" : ""
                }`}
              >
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          id="bestseller"
          checked={productDetails.bestseller}
          onChange={() =>
            setProductDetails((prev) => ({
              ...prev,
              bestseller: !prev.bestseller,
            }))
          }
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      <div className="flex gap-2 mt-4">
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
