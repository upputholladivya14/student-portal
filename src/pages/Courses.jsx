import { Link } from "react-router-dom";

function Courses() {
  const courses = [
    {
      id: "react",
      name: "React",
      description:
        "Learn React from fundamentals to advanced concepts.",
      duration: "6 Weeks",
    },
    {
      id: "javascript",
      name: "JavaScript",
      description:
        "Master modern JavaScript programming.",
      duration: "8 Weeks",
    },
    {
      id: "python",
      name: "Python",
      description:
        "Learn Python programming from scratch.",
      duration: "10 Weeks",
    },
    {
      id: "java",
      name: "Java",
      description:
        "Learn Java and object-oriented programming.",
      duration: "12 Weeks",
    },
  ];

  return (
    <main className="courses-page">

      <div className="courses-container">

        <h1>Available Courses</h1>

        <div className="courses-grid">

          {courses.map((course) => (
            <div
              className="course-card"
              key={course.id}
            >

              <h2>{course.name}</h2>

              <p>
                {course.description}
              </p>

              <p className="course-duration">
                <strong>Duration:</strong>{" "}
                {course.duration}
              </p>

              <Link
                to={`/courses/${course.id}`}
                className="primary-button course-button"
              >
                View Course
              </Link>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}

export default Courses;