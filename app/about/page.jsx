import classes from "./about.module.css";

export const metadata = {
  title: "About page",
  description: "this is about page contain the project details",
};

const About = () => {
  return (
    <main>
      <div className="preview">
        <div className={classes.about}>
          <p> this project for practice on Next.js foundations </p>
          <p>
            by using{" "}
            <a href="https://jsonplaceholder.typicode.com">jsonplaceholder</a>
          </p>
          <p>
            {" "}
            coded with 💙 by{" "}
            <a href="https://github.com/Abdoallah-Badr">Abdoallah Badr</a>{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
