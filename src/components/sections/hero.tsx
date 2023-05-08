import styles from "./hero.module.css";
export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1>
        <span>Hi there 👋, I&apos;m</span> Salvador AbdulRahman Lekan
      </h1>
      <p>
        I&apos;m a frontend engineer with three years of experience building customer-centric, pixel perfect web apps
        and dashboards with React, Node.js and Typescript
      </p>
      <div>
        <a href="#projects">View my works</a>
        <a href="/resume.pdf" download>
          Download my resume
        </a>
      </div>
    </section>
  );
}
