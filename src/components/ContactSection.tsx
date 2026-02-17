import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ArrowUpRight, Download } from "lucide-react";

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-3">Contact</p>
          <h2 className="font-display text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about tech.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <a
              href="mailto:maitreyanpers@gmail.com"
              className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Mail size={18} />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                  maitreyanpers@gmail.com
                </p>
              </div>
              <ArrowUpRight size={14} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="tel:+919715691608"
              className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Phone size={18} />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                  +91 9715691608
                </p>
              </div>
              <ArrowUpRight size={14} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="https://linkedin.com/in/maitreyan-t-r-030a45318/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Linkedin size={18} />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors">Maitreyan</p>
              </div>
              <ArrowUpRight size={14} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="https://github.com/Maitreyan-git"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Github size={18} />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">GitHub</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors">Maitreyan</p>
              </div>
              <ArrowUpRight size={14} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/30 transition-all group sm:col-span-2"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Download size={18} />
              </div>
              <div className="text-left flex-1">
                <p className="text-xs text-muted-foreground">Resume</p>
                <p className="text-sm text-foreground group-hover:text-primary transition-colors">Download my resume</p>
              </div>
              <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
