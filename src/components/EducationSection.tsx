import { motion } from "framer-motion";

const education = [
  {
    period: "2023 – Present",
    degree: "M.Sc. Software Systems (5-Year Integrated)",
    institution: "Coimbatore Institute of Technology",
    description:
      "Pursuing an integrated master's programme in Software Systems, building a strong foundation in computer science, software engineering, and modern development practices.",
  },
  {
    period: "2022 – 2023",
    degree: "Higher Secondary",
    institution: "The TVS School",
    description:
      "Completed higher secondary education with a focus on science and mathematics, laying the groundwork for further studies in technology.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const EducationSection = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-3">
            Education
          </p>
          <h2 className="font-display text-4xl font-bold">
            My <span className="text-gradient">Academic Journey</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Timeline column: line + markers */}
          <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col items-center">
            {/* Vertical line - runs through center of dots */}
            <div
              className="absolute top-5 bottom-5 w-0.5 flex-1 bg-primary/60"
              style={{ left: "19px" }}
            />
          </div>

          <div className="space-y-6">
            {education.map((entry) => (
              <motion.div
                key={entry.institution}
                variants={item}
                className="relative flex gap-0 min-h-[120px]"
              >
                {/* Marker: teal outline + filled center, centered on line */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center">
                  <div className="h-4 w-4 rounded-full border-2 border-primary bg-primary/30 shadow-[0_0_12px_hsl(174_72%_56%_/0.4)]" />
                </div>

                {/* Card - clearly visible box to the right */}
                <div className="flex-1 -ml-2 pl-6 sm:pl-8 pr-2">
                  <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-5 sm:p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)] group">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      {entry.period}
                    </p>
                    <h3 className="font-display font-semibold text-base sm:text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                      {entry.degree}
                    </h3>
                    <p className="text-sm text-primary/90 mb-3">{entry.institution}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
