
import { createContext, useContext, useState } from "react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const StudentContext = createContext();

const students = [
  { id: 1, name: "Arun Kumar", rollNo: "STU101" },
  { id: 2, name: "Priya Sharma", rollNo: "STU102" },
  { id: 3, name: "Rahul Raj", rollNo: "STU103" },
  { id: 4, name: "Divya Lakshmi", rollNo: "STU104" },
  { id: 5, name: "Karthik S", rollNo: "STU105" },
];

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  function addFavourite(student) {
    setFavourites((prev) => {
      const alreadyExists = prev.some(
        (item) => item.id === student.id
      );

      if (alreadyExists) {
        return prev;
      }

      return [...prev, student];
    });
  }

  function removeFavourite(id) {
    setFavourites((prev) =>
      prev.filter((student) => student.id !== id)
    );
  }

  return (
    <StudentContext.Provider
      value={{
        students,
        favourites,
        addFavourite,
        removeFavourite,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  return useContext(StudentContext);
}
