import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">

      <section className="home-card">

        <h1>Welcome to Student Portal</h1>

        <p>
          Learn programming, explore courses, and manage your
          student profile.
        </p>

        <Link
          to="/courses"
          className="primary-button"
        >
          Explore Courses
        </Link>

      </section>

    </main>
  );
}

export default Home;