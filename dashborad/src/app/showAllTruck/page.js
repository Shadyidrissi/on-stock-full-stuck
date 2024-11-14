"use client"; // Ensure it's a client-side component
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function Page() {
  const [data, setData] = useState([]);
  const router = useRouter(); // Initialize router

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://virtuous-appreciation-production.up.railway.app/show"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const deleteItem = async (id) => {
    console.log(id);
    try {
      await axios.delete(
        `https://virtuous-appreciation-production.up.railway.app/delete/${id}`
      );
      location.reload(); // Reload the page after deletion
      console.log("done");
    } catch (error) {
      console.log(error);
    }
  };

  const toEdit = (id) => {
    router.push(`/editTruck/${id}`); // Use router.push for navigation
  };

  const deleteAllData = async () => {
    try {
      await axios.delete(
        `https://virtuous-appreciation-production.up.railway.app/deleteAll`
      );
      // Filter out the deleted item from the state
      setData(data.filter((item) => item._id !== id));
      console.log("Deleted successfully");
    } catch (error) {
      console.log("Error deleting item:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to delete item.",
      });
    }
  };

  return (
    <div className="all-truck-page">
      <h1>
        Show All Trucks Cards
        <button
          id="buttonDE"
          href=""
          onClick={() => {
            deleteAllData();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </h1>
      <div className="cards">
        {data.map((item) => (
          <div id="card" key={item._id}>
            <li id="image-card">
              <img src={item.image} alt="" />
            </li>
            <li id="name-card">
              <h1>{item.nameEN}</h1>
            </li>
            <li id="type-card">
              <h1>Category: {item.type}</h1>
            </li>
            <li id="avalible-card">
              <h1>Hidden: {item.hidden ? "✔" : "❌"}</h1>
            </li>
            <li id="avalible-card">
              <h1>⭐ :{item.stars}</h1>
            </li>
            <li id="buttons-card">
              Edit:
              <button onClick={() => toEdit(item._id)}>
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </button>
              Delete:
              <button onClick={() => deleteItem(item._id)}>
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
