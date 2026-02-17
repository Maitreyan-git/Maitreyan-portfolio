import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Trophy, Award } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type Achievement = {
  icon: LucideIcon;
  title: string;
  description: string;
  where: string;
  problem: string;
  solution: string;
  highlights?: string[];
  techStack?: string[];
  images: { src: string; alt: string }[];
};

const achievements: Achievement[] = [
  {
    icon: Trophy,
    title: "India–Japan STI Forum Finalist",
    description:
      "Finalist at Cognisance Arena with SkillXchange — a cross-border skilling and workforce integration platform connecting India's tech talent with Japan's evolving workforce needs.",
    where:
      "Cognisance Arena (Finals), India–Japan STI Forum 2025, hosted at Indian Institute of Science (IISc), Bengaluru. A flagship competition bringing together innovators, researchers, policymakers, and industry leaders from India and Japan.",
    problem:
      "Japan faces a rapidly aging population and workforce shortage in technology-driven sectors, while India produces a growing pool of skilled tech talent that often lacks structured pathways for international workforce integration. The challenge: creating a sustainable bridge between India's emerging tech talent and Japan's evolving workforce needs while addressing skill alignment, cultural readiness, and long-term integration.",
    solution:
      "Presented SkillXchange — a cross-border skilling and workforce integration ecosystem designed to align Indian tech professionals with Japanese industry requirements. The platform focuses on structured skill mapping aligned with Japanese standards, language and cultural readiness modules, industry-integrated training pathways, workforce placement support, and long-term collaboration between academia, startups, and enterprises. The goal was not just placement, but creating a resilient Indo-Japan talent pipeline built on preparation, adaptability, and mutual growth.",
    highlights: [
      "Structured skill mapping aligned with Japanese industry standards and requirements.",
      "Language and cultural readiness modules to prepare professionals for seamless integration.",
      "Industry-integrated training pathways connecting academia with real-world needs.",
      "Workforce placement and transition support for long-term success.",
      "Long-term collaboration framework between academia, startups, and enterprises.",
      "A scalable model that addresses both Japan's workforce shortage and India's talent export potential.",
    ],
    techStack: ["React", "HTML", "CSS", "Bootstrap", "MySQL"],
    images: [
      {
        src: "/ij-sti-1.jpg",
        alt: "India-Japan STI Forum conference banner with IISc, Keio University, and India Japan Laboratory logos",
      },
      {
        src: "/ij-sti-2.jpg",
        alt: "Indian Institute of Science (IISc) main building in Bengaluru",
      },
      {
        src: "/ij-sti-4.jpg",
        alt: "Team presenting SkillXchange poster at the conference exhibition",
      },
      {
        src: "/ij-sti-5.jpg",
        alt: "Team members standing in front of SkillXchange presentation poster",
      },
      {
        src: "/ij-sti-6.jpg",
        alt: "Conference auditorium with speaker and large audience at IISc",
      },
    ],
  },
  {
    icon: Award,
    title: "Smart India Hackathon 2025 – Finalist",
    description:
      "With team Heal-O-Sphere, built GramSwasthya — an AI-powered, offline-first telemedicine ecosystem tailored for rural India.",
    where:
      "Smart India Hackathon 2025 – Software Edition, MedTech / HealthTech theme at Coimbatore Institute of Technology, Coimbatore.",
    problem:
      "In rural regions like Nabha, people travel long distances and lose daily wages to access basic care, only to face doctor shortages, medicine unavailability, and unreliable connectivity. Traditional telemedicine platforms that depend on stable internet and high digital literacy simply do not fit this context.",
    solution:
      "We designed GramSwasthya — an AI-powered, offline-first telemedicine ecosystem built from the ground up for rural India. The experience is centered around low connectivity, limited devices, and voice-first interaction, providing a continuous journey from on-device symptom checking to doctor consultation and pharmacy fulfilment.",
    highlights: [
      "On-device, multilingual, voice-enabled symptom checker that works even without active internet connectivity.",
      "Offline-first architecture using Bluetooth Low Energy peer-to-peer sync and SMS fallback for critical updates.",
      "Real-time doctor availability and consultation flows to reduce unnecessary travel and overcrowding.",
      "Pharmacy integration that links e‑prescriptions with real-time medicine inventory to prevent wasted trips.",
      "Digital health records that remain accessible in low-connectivity environments and for patients with limited digital access.",
      "A scalable model that reduces wage loss for workers, eases hospital load, and empowers local pharmacies.",
    ],
    techStack: [
      "React Native",
      "Node.js",
      "MongoDB",
      "TensorFlow Lite (on-device AI)",
      "Bluetooth Low Energy (P2P sync)",
    ],
    images: [
      {
        src: "/sih-1.jpg",
        alt: "Smart India Hackathon internal winners poster",
      },
      { src: "/sih-2.jpg", alt: "Smart India Hackathon winner certificate" },
      { src: "/sih-3.jpg", alt: "Team presenting GramSwasthya during SIH" },
      { src: "/sih-4.jpg", alt: "Group photo in front of MSc Computing block" },
    ],
  },
  {
    icon: Award,
    title: "YUVAHACKS'25 – 24 Hour Hackathon Project",
    description:
      "Participated in a 24-hour healthcare hackathon at SRM University, Trichy, building a technology-driven healthcare solution focused on improving accessibility and patient support workflows.",
    where:
      "24-Hour Healthcare Hackathon at SRM University, Trichy. A fast-paced innovation challenge focused on leveraging technology to address pressing healthcare challenges within a tight 24-hour timeframe.",
    problem:
      "The hackathon focused on leveraging technology to address pressing healthcare challenges. The core challenge was: How can emerging technologies be used to improve healthcare accessibility, efficiency, and patient support in real-world scenarios? The goal was to design and prototype a scalable solution within just 24 hours — balancing innovation, feasibility, and impact.",
    solution:
      "Within the 24-hour sprint, we conceptualized and built a technology-driven healthcare solution aimed at improving patient interaction and medical support workflows. Our solution focused on enhancing digital healthcare accessibility, streamlining communication between users and healthcare systems, leveraging intelligent automation to improve response efficiency, and designing a user-centric interface for real-world usability. From ideation to execution, we transformed a raw concept into a functional prototype under extreme time constraints — presenting it successfully to the jury and advancing to the final round.",
    highlights: [
      "Enhanced digital healthcare accessibility for better patient reach and engagement.",
      "Streamlined communication channels between users and healthcare systems.",
      "Intelligent automation to improve response efficiency and reduce manual overhead.",
      "User-centric interface design focused on real-world usability and adoption.",
      "Successfully advanced to the final round after rigorous jury evaluation.",
    ],
    techStack: [
      "React.js / React Native",
      "Node.js, Express.js",
      "MongoDB",
      "Python, TensorFlow / Scikit-learn",
      "Git & GitHub",
      "Figma",
    ],
    images: [
      {
        src: "/yuva-1.jpg",
        alt: "YUVAHACKS'25 certificate of participation",
      },
      {
        src: "/yuva-2.jpg",
        alt: "YUVAHACKS hackathon presentation screen in lecture hall",
      },
      {
        src: "/yuva-3.jpg",
        alt: "Team members working on laptops during the 24-hour hackathon",
      },
      {
        src: "/yuva-4.jpg",
        alt: "Participant focused on coding during YUVAHACKS event",
      },
    ],
  },
  {
    icon: Award,
    title: "ACEi Hackathon '26",
    description:
      "Participated in a clinical innovation hackathon organized by Aravind Eye Care System, Pondicherry, developing a Clinical Decision Support Logic System for Glaucoma Management to assist ophthalmologists in defining dynamic IOP targets.",
    where:
      "ACEi Hackathon '26 organized by Aravind Eye Care System, Pondicherry. A focused healthcare innovation sprint conducted by one of India's leading ophthalmology institutions, aimed at solving real-world clinical challenges through technology integration. The event provided direct exposure to real clinical case scenarios, interaction with ophthalmologists and medical experts, hospital workflow systems, and practical healthcare constraints.",
    problem:
      "Glaucoma management requires careful monitoring of Intraocular Pressure (IOP) levels. However, determining optimal target IOP values varies based on patient-specific conditions. The core challenge was to define clinically appropriate IOP target values, develop structured decision logic for glaucoma management, integrate this logic into existing Electronic Medical Record (EMR) systems, and ensure usability for ophthalmologists within real hospital workflows. The ultimate goal was to improve treatment accuracy while maintaining workflow efficiency.",
    solution:
      "We developed a Clinical Decision Support Logic System for Glaucoma Management designed to assist ophthalmologists in defining dynamic IOP targets. The solution featured an algorithmic framework for determining personalized IOP targets, integration-ready decision logic compatible with EMR systems, design focused on clinical usability and workflow alignment, and emphasis on precision, medical reasoning, and real-world implementation. Throughout the hackathon, we refined our model under the guidance of clinical experts, ensuring the solution aligned with practical medical decision-making.",
    highlights: [
      "Algorithmic framework for determining personalized IOP targets based on patient-specific conditions.",
      "Integration-ready decision logic compatible with existing Electronic Medical Record (EMR) systems.",
      "Designed for clinical usability and alignment with real hospital workflow systems.",
      "Refined under direct guidance from ophthalmologists and medical experts during the event.",
      "Focused on precision, medical reasoning, and practical implementation in clinical settings.",
      "Deep insight into healthcare system integration and the intersection of medicine and technology.",
    ],
    techStack: [
      "Python",
      "Flask / FastAPI",
      "React.js / HTML, CSS, JavaScript",
      "PostgreSQL",
      "Pandas, NumPy",
      "Git & GitHub",
      "Figma",
    ],
    images: [
      {
        src: "/acei-1.jpg",
        alt: "ACEi Hackathon '26 certificate of appreciation",
      },
      {
        src: "/acei-2.jpg",
        alt: "Welcome HACKATHON presentation screen at ACEi event",
      },
      {
        src: "/acei-3.jpg",
        alt: "Team presenting Clinical Decision Support System to judges",
      },
      {
        src: "/acei-4.jpg",
        alt: "Team collaborating around laptop during ACEi Hackathon",
      },
      {
        src: "/acei-5.jpg",
        alt: "Participants working together at ACEi Hackathon event",
      },
    ],
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-3">
            Achievements & Interests
          </p>
          <h2 className="font-display text-4xl font-bold">
            Highlights & <span className="text-gradient">Passions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {achievements.map((a, i) => (
            <Dialog key={a.title}>
              <DialogTrigger asChild>
                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full text-left glass rounded-xl p-6 flex gap-4 items-start hover:border-primary/30 hover:shadow-[var(--shadow-glow)] transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <a.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">{a.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {a.description}
                    </p>
                    <p className="mt-2 text-xs text-primary/80 underline underline-offset-4">
                      Click to view event details
                    </p>
                  </div>
                </motion.button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <a.icon size={18} />
                    </span>
                    <span>{a.title}</span>
                  </DialogTitle>
                  <DialogDescription>{a.description}</DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-6">
                  {a.images.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: 0.05 }}
                      className="space-y-3"
                    >
                      <p className="text-xs font-medium uppercase tracking-wide text-primary">
                        Photos
                      </p>
                      <Carousel
                        className="relative w-full"
                        opts={{ loop: true, align: "start" }}
                        plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
                      >
                        <CarouselContent>
                          {a.images.map((img) => (
                            <CarouselItem key={img.alt} className="md:basis-4/5">
                              <div className="group relative aspect-[16/9] overflow-hidden rounded-xl bg-muted flex items-center justify-center">
                                <img
                                  src={img.src}
                                  alt={img.alt}
                                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                                  loading="lazy"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex" />
                        <CarouselNext className="hidden sm:flex" />
                      </Carousel>
                    </motion.div>
                  )}

                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-1.5"
                    >
                      <p className="text-xs font-medium uppercase tracking-wide text-primary">
                        Where participated?
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {a.where}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.05 }}
                      className="space-y-1.5"
                    >
                      <p className="text-xs font-medium uppercase tracking-wide text-primary">
                        Problem statement
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {a.problem}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      className="space-y-1.5"
                    >
                      <p className="text-xs font-medium uppercase tracking-wide text-primary">
                        Solution provided
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {a.solution}
                      </p>
                    </motion.div>

                    {a.highlights && a.highlights.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.14 }}
                        className="space-y-1.5"
                      >
                        <p className="text-xs font-medium uppercase tracking-wide text-primary">
                          Key impact points
                        </p>
                        <ul className="list-disc pl-4 space-y-1">
                          {a.highlights.map((point) => (
                            <li
                              key={point}
                              className="text-sm text-muted-foreground leading-relaxed"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {a.techStack && a.techStack.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.18 }}
                        className="space-y-1.5"
                      >
                        <p className="text-xs font-medium uppercase tracking-wide text-primary">
                          Tech stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {a.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* end images */}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
