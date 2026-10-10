
import { Link } from "react-router-dom";
import { useStudents } from "../context/StudentContext";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function FavouriteStudents() {
  const { favourites, removeFavourite } = useStudents();

  return (
    <section>
      <div className="page-heading">
        <div>
          <h1>Favourite Students</h1>
          <p>Your selected students are listed here.</p>
        </div>

        <Link className="button secondary" to="/">
          + Add Students
        </Link>
      </div>

      {favourites.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">♡</div>
          <h2>No favourite students added yet</h2>
          <p>Visit the Student List page to add your favourites.</p>
          <Link className="button" to="/">
            Browse Students
          </Link>
        </div>
      ) : (
        <div className="student-grid">
          {favourites.map((student) => (
            <article className="student-card" key={student.id}>
              <div className="avatar">
                {student.name.charAt(0)}
              </div>

              <h3>{student.name}</h3>
              <p>Roll No: {student.rollNo}</p>

              <button
                className="button danger"
                onClick={() => removeFavourite(student.id)}
              >
                Remove Favourite
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default FavouriteStudents;
