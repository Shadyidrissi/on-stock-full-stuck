"use client";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function Page() {
  // Define states for all input fields
  const [imageUrl, setImageUrl] = useState("");
  const [titleAr, setTitleAr] = useState("");
  const [nameAr, setNameAr] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [carType, setCarType] = useState("");
  const [descriptionAr, setDescriptionAr] = useState("");
  const [locationAr, setLocationAr] = useState("");
  const [price, setPrice] = useState("");
  const [price2, setPrice2] = useState("");
  const [stars, setStars] = useState("");
  const [isHidden, setIsHidden] = useState(false);
  const [categories, setCategories] = useState([]); // State for categories

  const handleSubmit = async () => {
    const truckData = {
      image: imageUrl,
      titleAR: titleAr,
      nameAR: nameAr,
      phone: phoneNumber,
      type: carType,
      DescriptionAR: descriptionAr,
      LoactionAR: locationAr,
      Price: price,
      Price2: price2,
      stars: stars,
      hidden: isHidden,
    };

    try {
      const response = await axios.post(
        "https://virtuous-appreciation-production.up.railway.app/addTruck",
        truckData
      );
      console.log("Truck saved:", response.data);

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
        title: "Truck added successfully",
      });

      // Reset fields after saving
      setImageUrl("");
      setTitleAr("");
      setNameAr("");
      setPhoneNumber("");
      setCarType("");
      setDescriptionAr("");
      setLocationAr("");
      setPrice("");
      setPrice2("");
      setIsHidden(false);
    } catch (error) {
      console.error("Error saving truck:", error);
    }
  };



  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://virtuous-appreciation-production.up.railway.app/all_Catrgory"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="add-truck">
      <h1 id="title">Add New Truck Card</h1>
      <div className="input-image">
        <li>
          <p>Image URL</p>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </li>
        <img src={imageUrl} alt="" />
      </div>
      <div className="inputs-title">
        <li>
          <p>Title AR</p>
          <input
            type="text"
            value={titleAr}
            onChange={(e) => setTitleAr(e.target.value)}
          />
        </li>
      </div>
      <div className="inputs-name">
        <li>
          <p>Name AR</p>
          <input
            type="text"
            value={nameAr}
            onChange={(e) => setNameAr(e.target.value)}
          />
        </li>
      </div>
      <div className="input-phone">
        <li>
          <p>Phone Number</p>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </li>
      </div>
      <div className="input-type">
        <li>
          <p>Car Type</p>
          <input
            type="text"
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
          />
        </li>
        <h4>{categories.map((item) => (`${item.title } , `))} </h4>
      </div>
      <div className="inputs-description">
        <li>
          <p>Description AR</p>
          <textarea
            cols="30"
            rows="10"
            value={descriptionAr}
            onChange={(e) => setDescriptionAr(e.target.value)}
          ></textarea>
        </li>
      </div>
      <div className="inputs-location">
        <li>
          <p>Location AR</p>
          <input
            type="text"
            value={locationAr}
            onChange={(e) => setLocationAr(e.target.value)}
          />
        </li>
      </div>
      <div className="inputs-hidden-price">
        <li>
          <p>Stars Person</p>
          <input
            type="text"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
          />
        </li>
      </div>
      <div className="inputs-hidden-price">
        <li>
          <p>Price Truck</p>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </li>
        <li>
          <p>Price 2 Truck</p>

          <input
            type="text"
            value={price2}
            onChange={(e) => setPrice2(e.target.value)}
          />
        </li>
        <ul id="check-box">
          <p>Hidden Post</p>
          <input
            type="checkbox"
            checked={isHidden}
            onChange={(e) => setIsHidden(e.target.checked)}
          />
        </ul>
      </div>

      <div className="button-save">
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
}

export default Page;
