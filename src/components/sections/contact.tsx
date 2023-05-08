import styles from "./contact.module.css";
export default function ContactSection() {
  return (
    <section className={styles.contact}>
      <h2>Got a question, proposal, project or want us to work together on something?</h2>
      <p>
        Send me an email at <a href="mailto:lekansalvador@gmail.com">lekansalvador@gmail.com</a> or you can reach me on{" "}
        <a href="https://twitter.com/salvadorlekan" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>{" "}
        or{" "}
        <a href="https://www.linkedin.com/in/salvadorlekan" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        .
      </p>
    </section>
  );
}
