import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import Layout from "./components/Layout";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";

function App() {
  return (
    <StudentProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<StudentList />} />
            <Route
              path="favourites"
              element={<FavouriteStudents />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;