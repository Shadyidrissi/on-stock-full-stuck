"use client"; // Ensure this is a client component

import React, { useEffect, useState } from "react";
import "./alltruck.style.css";
import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie
import translate from "../../translate/translate";

function Page() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]); // State for categories
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
  const [lang, setLang] = useState("EN"); // Initialize with a default language
  const cardsPerPage = 16;

  useEffect(() => {
    // Only access cookies on the client side
    const storedLang = Cookies.get("language") || "EN"; // Get language from cookies
    setLang(storedLang);

    // Listen for changes to cookies by checking them directly
    const checkCookieChange = () => {
      const currentLang = Cookies.get("language") || "EN"; // Get current language from cookies
      setLang(currentLang);
    };

    // You can use a setInterval to periodically check for changes in cookies if necessary
    const intervalId = setInterval(checkCookieChange, 1000); // Check every second (adjust as needed)

    return () => {
      clearInterval(intervalId); // Cleanup the interval
    };
  }, []);

  // Fetch truck data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://virtuous-appreciation-production.up.railway.app/show"
        );
        // Sort the data by stars in descending order (highest stars first)
        const sortedData = response.data.sort((a, b) => b.stars - a.stars);
        setData(sortedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Fetch categories from API
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

  // Filter the data based on search query and selected category
  const filteredData = data.filter((item) => {
    const matchesCategory = selectedCategory
      ? item.type === selectedCategory
      : true; // If no category selected, show all trucks
    const matchesSearch = item.titleAR
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredData.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(filteredData.length / cardsPerPage);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to change the language and save to cookies
  const changeLanguage = (newLang) => {
    setLang(newLang);
    Cookies.set("language", newLang); // Set new language in cookies
  };

  return (
    <div className="all-truck-div">
      <div id="header">
        {/* Category Selection */}
        <div id="option-id" dir="rtl">
          <h1>نوع النقل</h1>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)} // Update selected category
          >
            <option value="">جميع الشاحنات</option>
            {categories.map((category) => (
              <option value={category.title} key={category._id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        {/* Search Input */}
        <div id="input-id" dir="rtl">
          <h1>البحث : </h1>
          <input
            type="text"
            placeholder="البحث حسب العنوان..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          />
        </div>
      </div>

      <div className="body-all-truck-div">
        <h1>جميع الشاحنات</h1>
        <div id="body-cars-id">
          {currentCards.map((item) => (
            <a href={`./allTruck/${item._id}`} id="card" key={item.id}>
              <div id="image-car-id">
                <img src={item.image} alt="" />
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>{" "}
                  : {item.stars}
                </li>
              </div>
              <div id="info-car-id">
                <h1>{item.titleAR}</h1>
                <li>{item.LoactionAR}</li>
              </div>
              <hr id="line" />
              <div id="name-car-id">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <h1>{item.nameAR}</h1>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination Links */}
        <div id="footer-page-number">
          {Array.from({ length: totalPages }, (_, i) => (
            <a
              key={i + 1}
              href="#"
              onClick={() => paginate(i + 1)}
              className={currentPage === i + 1 ? "active-page" : ""}
            >
              {i + 1}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
