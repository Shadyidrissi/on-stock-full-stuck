"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [truck, setTruck] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://virtuous-appreciation-production.up.railway.app/show"
        );
        setTruck(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://virtuous-appreciation-production.up.railway.app/all_Catrgory"
        );
        setCategory(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const numberHiddenTruck = () => {
    return truck.filter((item) => item.hidden === true).length;
  };
  const numberAvalibeleTruck = () => {
    const numberHidden = numberHiddenTruck();
    const data = truck.length - numberHidden;
    return data;
  };

  return (
    <div className="home-page">
      <div id="truck">
        <div id="all-items">
          <h2>
            <p>All : </p>
            <span> {truck.length}</span>
          </h2>
          <h2>
            <p>Hidden : </p>
            <span> {numberHiddenTruck()}</span>
          </h2>
          <h2>
            <p>Available : </p>
            <span> {numberAvalibeleTruck()}</span>
          </h2>
        </div>
        <div id="most-6-category">
          <h1>Top 4 Trucks</h1>
          {/* Filter out hidden trucks and display only the first 4 visible trucks */}
          {truck
            .filter((item) => !item.hidden) // Skip hidden trucks
            .slice(0, 4) // Show only the top 4 trucks
            .map((item, index) => (
              <div key={index}>
                <img src={item.image} alt="" />
                <h1>{item.titleEN}</h1>
              </div>
            ))}
        </div>
      </div>
      <div id="category">
        <div id="all-items">
          <p>All Category :</p>
          <h1>{category.length}</h1>
        </div>
        <div id="most-6-category">
          <h1>Top 6 Category</h1>
          {category.slice(0, 6).map((item, index) => (
            <div key={index}>
              <img src={item.image} alt="" />
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
