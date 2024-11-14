"use client";
import React, { useEffect, useState } from "react";
import "../alltruck.style.css";
import axios from "axios";
import Cookies from "js-cookie"; // Importing the Cookies library

function Page({ params }) {
  const [truckData, setTruckData] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [price2, setPrice2] = useState("");
  const [stars, setStars] = useState("");
  const [description, setDescription] = useState("");
  const [isHidden, setIsHidden] = useState(false);

  const { id } = params;

  useEffect(() => {
    if (id) {
      const fetchTruckData = async () => {
        try {
          const response = await axios.get(
            `https://virtuous-appreciation-production.up.railway.app/show/${id}`
          );
          const truck = response.data;
          setTruckData(truck);
          setImageUrl(truck.image);
          setPhoneNumber(truck.phone);
          setPrice(truck.Price);
          setPrice2(truck.Price2);
          setStars(truck.stars);
          setIsHidden(truck.hidden);

          // Set text based on initial language
          setTitle(truck[`titleAR`]);
          setName(truck[`nameAR`]);
          setLocation(truck[`LoactionAR`]);
          setDescription(truck[`DescriptionAR`]);
        } catch (error) {
          console.error("Error fetching truck data:", error);
        }
      };
      fetchTruckData();
    }
  }, [id]);

  // Listen for changes in the language cookie
  useEffect(() => {
    const handleCookieChange = (newLang) => {
      if (truckData) {
        setTitle(truckData[`titleAR`]);
        setName(truckData[`nameAR`]);
        setLocation(truckData[`LoactionAR`]);
        setDescription(truckData[`DescriptionAR`]);
      }
    };

    const langCookie = Cookies.get("language");
    if (langCookie) {
      handleCookieChange(langCookie);
    }
  }, [truckData]);

  return (
    <div className="detail-car-div">
      <div id="loading-detail">
        <div id="image-details-car">
          <img src={imageUrl} alt={`Image of ${title}`} />
        </div>
        <div id="info-details-car" dir="rtl">
          <h1>{title}</h1>
          <h3>
            <span aria-hidden="true">
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
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </span>
            <p>{name}</p>
          </h3>
          <h3>
            <span aria-hidden="true">
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
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            <p>{location}</p>
          </h3>
          <h3>
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </span>
            <p>{phoneNumber}</p>
          </h3>
          <h3 id="price-div">{price}DH / {price2}DH</h3>
        </div>
      </div>
      <div id="more-info-div" dir="rtl">
        <div id="description-car">
          <h1># وصف</h1>
          <p>{description}</p>
        </div>
        <div id="remarque-car">
          <h1># ملاحظة</h1>
          <p>
            نوفر لك جميع المعلومات المتعلقة بصاحب خدمة النقل لنساعدك في تسهيل
            عملية التواصل. نود تذكيرك بأننا لا نتحمل أي مسؤولية في حال وقوع سرقة
            أو تلف. نحن نعمل فقط على تقديم الخدمة وتوفير وسائل النقل المتاحة.
            عند اللقاء مع مزود الخدمة، يرجى التأكد من هويته الشخصية (بطاقة
            التعريف الوطنية) كإجراء احترازي.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
