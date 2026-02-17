import { motion } from "framer-motion";

type SkillKey =
  | "java"
  | "python"
  | "cpp"
  | "c"
  | "javascript"
  | "html"
  | "css"
  | "angular"
  | "react"
  | "reactnative"
  | "flask"
  | "django"
  | "bootstrap"
  | "restapi"
  | "numpy"
  | "matplotlib"
  | "pandas"
  | "mysql"
  | "mongodb"
  | "oracle"
  | "git"
  | "docker"
  | "linux"
  | "figma"
  | "vscode"
  | "networking";

const skillIconMap: Record<
  SkillKey,
  { label: string; icon: string; bg?: string }
> = {
  java: {
    label: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  python: {
    label: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  cpp: {
    label: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  c: {
    label: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  javascript: {
    label: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  html: {
    label: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  css: {
    label: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  angular: {
    label: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  react: {
    label: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  reactnative: {
    label: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  flask: {
    label: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  django: {
    label: "Django",
    icon: `${import.meta.env.BASE_URL}django-logo.png`,
  },
  bootstrap: {
    label: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  restapi: {
    label: "REST APIs",
    icon: `${import.meta.env.BASE_URL}rest-api-logo.png`,
  },
  numpy: {
    label: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  matplotlib: {
    label: "Matplotlib",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
  },
  pandas: {
    label: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  mysql: {
    label: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  mongodb: {
    label: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  oracle: {
    label: "Oracle",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  },
  git: {
    label: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  docker: {
    label: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  linux: {
    label: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  figma: {
    label: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  vscode: {
    label: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  networking: {
    label: "Networks",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg",
  },
};

const skillCategories: {
  title: string;
  skills: SkillKey[];
}[] = [
  {
    title: "Languages",
    skills: ["java", "python", "cpp", "c", "javascript", "html", "css"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["angular", "react", "reactnative", "flask", "django", "bootstrap", "restapi", "numpy", "matplotlib", "pandas"],
  },
  {
    title: "Databases",
    skills: ["mysql", "mongodb", "oracle"],
  },
  {
    title: "Tools & Platforms",
    skills: ["git", "docker", "linux", "figma", "vscode", "networking"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-3">Skills</p>
          <h2 className="font-display text-4xl font-bold">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-colors group"
            >
              <h3 className="font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((key) => {
                  const s = skillIconMap[key];
                  return (
                    <span
                      key={key}
                      className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                    >
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-background/80 overflow-hidden">
                        <img
                          src={s.icon}
                          alt={s.label}
                          className="h-4 w-4 object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span>{s.label}</span>
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
