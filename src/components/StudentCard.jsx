export default function StudentCard({ student, isFavourite, onAdd, onRemove }) {
  return (
    <article className="student-card">
      <div className={`avatar ${student.color}`} aria-hidden="true">{student.initials}</div>
      <div className="student-info">
        <div className="student-heading">
          <h3>{student.name}</h3>
          <span className="student-id">{student.id}</span>
        </div>
        <p className="course">{student.course}</p>
        <p className="student-meta"><span className="meta-dot" /> {student.year} <span className="meta-divider">·</span> {student.email}</p>
      </div>
      {isFavourite ? (
        <button className="button button-added" onClick={() => onRemove(student.id)} aria-label={`Remove ${student.name} from favourites`}>
          <span aria-hidden="true">♥</span> Saved
        </button>
      ) : (
        <button className="button button-primary" onClick={() => onAdd(student)} aria-label={`Add ${student.name} to favourites`}>
          <span aria-hidden="true">＋</span> Add to favourites
        </button>
      )}
    </article>
  );
}
