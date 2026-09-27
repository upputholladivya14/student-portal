import { Link, useParams } from "react-router-dom";

function CourseDetails() {
  const { courseId } = useParams();

  const courses = {
    react: {
      name: "REACT",
      description: "You selected the react course.",
      topics: [
        "Fundamentals",
        "Practical Coding",
        "Projects",
        "Interview Preparation",
      ],
    },

    javascript: {
      name: "JAVASCRIPT",
      description:
        "You selected the javascript course.",
      topics: [
        "JavaScript Fundamentals",
        "DOM Manipulation",
        "ES6 Features",
        "Projects",
      ],
    },

    python: {
      name: "PYTHON",
      description:
        "You selected the python course.",
      topics: [
        "Python Fundamentals",
        "Functions",
        "Data Structures",
        "Projects",
      ],
    },

    java: {
      name: "JAVA",
      description: "You selected the java course.",
      topics: [
        "Java Fundamentals",
        "Object-Oriented Programming",
        "Collections",
        "Projects",
      ],
    },
  };

  const course = courses[courseId];

  if (!course) {
    return (
      <main className="course-details-page">

        <div className="course-details-card">

          <h1>Course Not Found</h1>

          <p>
            The requested course does not exist.
          </p>

          <Link
            to="/courses"
            className="primary-button"
          >
            ← Back to Courses
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="course-details-page">

      <div className="course-details-card">

        <h1>Course Details</h1>

        <h2>{course.name}</h2>

        <p>
          {course.description}
        </p>

        <p>
          Course ID: {courseId}
        </p>

        <h3>Topics</h3>

        <ul>
          {course.topics.map((topic) => (
            <li key={topic}>
              {topic}
            </li>
          ))}
        </ul>

        <Link
          to="/courses"
          className="primary-button back-button"
        >
          ← Back to Courses
        </Link>

      </div>

    </main>
  );
}

export default CourseDetails;