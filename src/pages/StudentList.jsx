
import { Link } from "react-router-dom";
import { useStudents } from "../context/StudentContext";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function StudentList() {
  const { students, favourites, addFavourite } = useStudents();

  return (
    <section>
      <div className="page-heading">
        <div>
          <h1>Student List</h1>
          <p>Add your favourite students to your collection.</p>
        </div>

        <Link className="button secondary" to="/favourites">
          View Favourites ({favourites.length})
        </Link>
      </div>

      <div className="student-grid">
        {students.map((student) => {
          const isFavourite = favourites.some(
            (item) => item.id === student.id
          );

          return (
            <article className="student-card" key={student.id}>
              <div className="avatar">
                {student.name.charAt(0)}
              </div>

              <h3>{student.name}</h3>
              <p>Roll No: {student.rollNo}</p>

              <button
                className={isFavourite ? "button added" : "button"}
                onClick={() => addFavourite(student)}
                disabled={isFavourite}
              >
                {isFavourite ? "✓ Added to Favourites" : "♡ Add to Favourite"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default StudentList;
