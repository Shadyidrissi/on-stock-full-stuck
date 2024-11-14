"use client";
import React from "react";
import "../globals.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
function page() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async () => {
    const categoryData = {
      title: title,
      image: image,
    };

    try {
      const response = await axios.post(
        "https://virtuous-appreciation-production.up.railway.app/add_category",
        categoryData
      );
      console.log("category saved:", response.data);
      const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "save New Category  successfully",
      });
      // Reset coupon and other fields after saving
      title("");
      image("");
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };
  return (
    <div className="xx">
      <h1 id="title">Add New Category</h1>
      <div className="category-page">
        <div>
          <img src="" alt="" />
        </div>
        <ul>
          <p>Name </p>
          <input type="text" placeholder="Category Name" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </ul>
        <ul>
          <p>Image </p>
          <input type="text" placeholder="URL Image" value={image} onChange={(e) => setImage(e.target.value)} />
        </ul>
        <ul id="button-add">
          <button onClick={()=>{handleSubmit()}}>Save</button>
        </ul>
      </div>
    </div>
  );
}

export default page;
