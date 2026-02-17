import { motion } from "framer-motion";
import { ExternalLink, Car, BookOpen, Gamepad2, Building2, Cloud, Pill } from "lucide-react";

const projects = [
  {
    title: "DriveMe — Cab Driver for Rent",
    description:
      "A multi-module web platform connecting car owners with drivers, supporting customer, driver, and admin workflows with booking management, driver tracking, and real-time location services.",
    tech: ["React", "Bootstrap", "MySQL", "Google Maps API"],
    icon: Car,
    githubUrl: "https://github.com/Maitreyan-git/Driveme",
  },
  {
    title: "Book Management System",
    description:
      "Web-based book management application with secure user authentication, role-based access control, session handling, and structured navigation for data integrity.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    icon: BookOpen,
    githubUrl: "https://github.com/Maitreyan-git/Book-Management-System",
  },
  {
    title: "Hangman Game (EMU 8086)",
    description:
      "A text-based word-guessing game implemented in assembly language using EMU 8086. Features difficulty levels, score tracking, file-based word loading, and visual hangman drawing mechanics.",
    tech: ["Assembly", "EMU 8086", "x86"],
    icon: Gamepad2,
    githubUrl: "https://github.com/Maitreyan-git/Hangman-game-using-EMU-8086",
  },
  {
    title: "Pharmacy Management System",
    description:
      "Java-based desktop application integrating billing, inventory control, and user authentication for pharmacy operations with reliable stock tracking and transaction handling.",
    tech: ["Java", "Swing", "JDBC", "MySQL"],
    icon: Pill,
    githubUrl: "https://github.com/Maitreyan-git/Pharmacy-management-System",
  },
  {
    title: "Weather Forecast App",
    description:
      "A Flask-based web application that displays 7-day weather forecasts using OpenWeatherMap API. Includes SMS alert functionality via Twilio for extreme temperature conditions, helping users stay safe during weather extremes.",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Twilio API", "OpenWeatherMap API"],
    icon: Cloud,
    githubUrl: "https://github.com/Maitreyan-git/Weather-forecast",
  },
  {
    title: "APEX BANK",
    description:
      "A comprehensive banking application built with modern web technologies, featuring secure transaction management, account operations, and user-friendly interfaces for seamless banking experiences.",
    tech: ["TypeScript", "JavaScript", "React", "CSS"],
    icon: Building2,
    githubUrl: "https://github.com/Maitreyan-git/APEX-BANK",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-3">Projects</p>
          <h2 className="font-display text-4xl font-bold">
            Things I've <span className="text-gradient">Built</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.githubUrl || "#"}
              target={project.githubUrl ? "_blank" : undefined}
              rel={project.githubUrl ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-xl p-6 flex flex-col group hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-glow)] cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <project.icon size={20} />
                </div>
                <ExternalLink
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </div>

              <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
