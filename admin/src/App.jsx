import React from "react";
import Navbar from "./components/Navbar"; // Ensure this matches the file name
import { ToastContainer } from "react-toastify";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer autoClose={4000} />
      <Navbar />
      <Admin />
    </div>
  );
};

export default App;
