import React from "react";

export default function SubjectCard({ subject }) {
  return (
    <div className="subject">
      <img src={subject.image} alt={subject.subject} />
      <div>{subject.subject}</div>
    </div>
  );
}