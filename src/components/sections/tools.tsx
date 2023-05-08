import styles from "./tools.module.css";
import classNames from "classnames";
const tools = [
  {
    name: "React",
    level: 3,
  },
  {
    name: "Git",
    level: 1,
  },
  {
    name: "Node.js",
    level: 2,
  },
  {
    name: "Typescript",
    level: 3,
  },
  {
    name: "Javascript",
    level: 3,
  },
  {
    name: "HTML",
    level: 1,
  },
  {
    name: "Ant Design",
    level: 3,
  },
  {
    name: "CSS",
    level: 1,
  },

  {
    name: "TailwindCSS",
    level: 2,
  },
  {
    name: "Material UI",
    level: 3,
  },

  {
    name: "NestJS",
    level: 2,
  },
  {
    name: "Express",
    level: 2,
  },
  {
    name: "SASS",
    level: 1,
  },
  {
    name: "PostgreSQL",
    level: 2,
  },

  {
    name: "Prisma",
    level: 3,
  },
  {
    name: "Next.js",
    level: 3,
  },
  {
    name: "Github Actions",
    level: 2,
  },
  {
    name: "GCP",
    level: 2,
  },
  {
    name: "Docker",
    level: 1,
  },
  {
    name: "DigitalOcean",
    level: 2,
  },
  {
    name: "Sequelize",
    level: 2,
  },
] as {
  name: string;
  level: 1 | 2 | 3;
}[];
// .sort(() => {
//   return 0.5 - Math.random();
// });

export default function ToolsSection() {
  return (
    <section className={styles.tools}>
      <h2>Tools I use</h2>
      <ul>
        {tools.map((tool) => (
          <li
            key={tool.name}
            className={classNames({
              [styles.level1]: tool.level === 1,
              [styles.level2]: tool.level === 2,
              [styles.level3]: tool.level === 3,
            })}>
            {tool.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
