import { motion } from "framer-motion";
import quantumLogo from "@/assets/quantum-logo.png";
import dbmsLogo from "@/assets/dbms-logo.png";
import mlLogo from "@/assets/ml-logo.png";

const interests = [
  {
    label: "Full-Stack Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    label: "Database Management Systems",
    icon: dbmsLogo,
  },
  {
    label: "Quantum Computing",
    icon: quantumLogo,
  },
  {
    label: "Machine Learning",
    icon: mlLogo,
  },
  {
    label: "Artificial Intelligence",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const InterestsSection = () => {
  return (
    <section id="interests" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-3">
            Interests
          </p>
          <h2 className="font-display text-4xl font-bold">
            What I'm <span className="text-gradient">Passionate About</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {interests.map((interest) => (
            <motion.div
              key={interest.label}
              variants={item}
              className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-card/40 hover:border-primary/50 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background/80 overflow-hidden">
                <img
                  src={interest.icon}
                  alt=""
                  className="h-5 w-5 object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {interest.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InterestsSection;
