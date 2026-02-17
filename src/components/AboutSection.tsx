import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium uppercase tracking-wide mb-3">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              So, Who <span className="text-gradient">Am I?</span>
            </h2>
          </div>

          <div className="space-y-6 text-left">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              I am a motivated undergraduate student who is passionate about learning new
              technologies and building meaningful projects. I enjoy participating in hackathons
              and working on innovative ideas, especially in areas like AI and quantum computing.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Through these experiences, I have developed strong problem-solving abilities, logical
              thinking, and the ability to work effectively in team environments under time
              constraints. I am always eager to explore new tools and frameworks, continuously
              improve my technical skills, and apply my knowledge to solve real-world problems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              I am currently seeking internship opportunities to gain industry exposure, enhance my
              practical understanding, and contribute positively to impactful projects.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 text-secondary-foreground bg-secondary px-4 py-2.5 rounded-lg border border-border/50">
              <GraduationCap size={18} className="text-primary shrink-0" />
              <span className="text-sm font-medium">M.Sc. Software Systems — CIT</span>
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground bg-secondary px-4 py-2.5 rounded-lg border border-border/50">
              <MapPin size={18} className="text-primary shrink-0" />
              <span className="text-sm font-medium">Coimbatore, India</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22 }}
            className="mt-10 text-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
