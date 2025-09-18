import React, { useEffect, useState } from "react";
import ObjectCard from "../components/ObjectCard";
import SubjectCard from "../components/SubjectCard";

export default function Home() {
  const [objects, setObjects] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("objects.json").then(res => res.json()).then(setObjects);
    fetch("subjects.json").then(res => res.json()).then(setSubjects);
  }, []);

  return (
    <main className="container">
      <div className="banner">
        <img src="image/banner.jpg" alt="banner" />
      </div>

      <h2 className="section-title">WHO SHOULD LEARN PROGRAMMING IN FPT APTECH?</h2>
      <div className="cards">
        {objects.map(item => (
          <ObjectCard key={item.id} item={item} />
        ))}
      </div>

      <h2 className="section-title">WHAT IS IN THE COURSE PROGRAM?</h2>
      <div className="subjects">
        {subjects.map(s => (
          <SubjectCard key={s.id} subject={s} />
        ))}
        <p className="subject-text">With a program design that includes 4 semesters with many important technologies such as ReactJS, PHP, Python, .NET Core, and Spring Boot, learners are brought into the world of programming quickly and effectively. After graduation, students will be confident in front of employers with 4 project semesters that provide quality, practical products. Students will definitely score points.
</p>
      </div>
    </main>
  );
}