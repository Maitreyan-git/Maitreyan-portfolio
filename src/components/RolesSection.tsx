import { motion } from "framer-motion";
import gocLogo from "@/assets/goc-logo.png";
import straitsLogo from "@/assets/403-logo.png";

const roles = [
  {
    id: "google",
    logoSrc: gocLogo,
    logoAlt: "Google Developer Group On Campus – Coimbatore Institute of Technology",
    logoColor: "from-emerald-400 via-emerald-300 to-sky-400",
    org: "Google On Campus – CIT",
    title: "Finance & Operations Lead",
    period: "2024 — Present",
    description:
      "Managing finances, operations, and event logistics to enable impactful tech initiatives on campus.",
  },
  {
    id: "403-straits",
    logoSrc: straitsLogo,
    logoAlt: "403 Straits Cybersecurity Club",
    logoColor: "from-sky-400 via-cyan-300 to-violet-400",
    org: "403 Straits Cybersecurity Club",
    title: "Outreach Lead",
    period: "2024 — Present",
    description:
      "Leading outreach, partnerships, and community engagement for cybersecurity awareness and events.",
  },
];

const RolesSection = () => {
  return (
    <section id="roles" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-3">
            Roles & Leadership
          </p>
          <h2 className="font-display text-4xl font-bold">
            How I <span className="text-gradient">Contribute</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={role.org}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="glass rounded-xl p-6 flex gap-4 items-center hover:border-primary/30 hover:shadow-[var(--shadow-glow)] transition-all"
            >
              <div className="shrink-0">
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${role.logoColor} flex items-center justify-center shadow-[0_0_25px_rgba(45,212,191,0.45)] overflow-hidden`}
                  >
                    <img
                      src={role.logoSrc}
                      alt={role.logoAlt}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-primary mb-1">
                  {role.org}
                </p>
                <h3 className="font-display font-semibold text-base mb-1">
                  {role.title}
                </h3>
                <p className="text-[11px] text-muted-foreground mb-2">
                  {role.period}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;

