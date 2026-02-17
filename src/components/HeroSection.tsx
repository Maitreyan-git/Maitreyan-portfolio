import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;
const profileImg = `${import.meta.env.BASE_URL}profile.png`;

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(220_14%_18%_/_0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(220_14%_18%_/_0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-medium mb-4 tracking-wide text-sm uppercase"
            >
              Software Developer
            </motion.p>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Maitreyan</span>
              <br />
              <span className="text-muted-foreground text-3xl md:text-4xl font-normal">
                Think. Build. Repeat.
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed">
              Passionate about designing and building software solutions that address real-world problems. Currently pursuing M.Sc. Software Systems at Coimbatore Institute of Technology.
            </p>

            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:border-primary/50 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <div className="flex items-center gap-5 mt-8 justify-center lg:justify-start">
              <a href="https://github.com/Maitreyan-git/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/maitreyan-t-r-030a45318/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:maitreyanpers@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex shrink-0 justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 shadow-[var(--shadow-glow)]">
              <img
                src={profileImg}
                alt="Maitreyan T R"
                className="w-full h-full object-cover object-[62%_50%] scale-125"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border border-primary/10 animate-float" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
