import { createFileRoute, notFound } from "@tanstack/react-router";
import { team } from "../../data/team";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Mail, Linkedin, Github, Globe, CheckCircle2, ChevronRight, ExternalLink } from "lucide-react";
import { useRef } from "react";

export const Route = createFileRoute("/team/$memberId")({
  component: TeamProfile,
});

// Animations
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

function TeamProfile() {
  const { memberId } = Route.useParams();
  const member = team.find((m) => m.id === memberId);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!member) {
    throw notFound();
  }

  // Placeholder data for new sections
  const projects = [
    { name: "Zevyn Core Architecture", role: "Lead Architect", year: "2023" },
    { name: "AI Integration Platform", role: "Product Strategy", year: "2024" },
  ];

  const experience = [
    { title: "Founder", company: "Zevyn Technologies", period: "2022 - Present" },
    { title: "Senior Digital Strategist", company: "Tech Innovations", period: "2019 - 2022" },
  ];
  
  const certificates = [
    "AWS Certified Solutions Architect",
    "Google Professional Cloud Architect",
    "Certified Information Systems Security Professional"
  ];

  return (
    <div ref={containerRef} className="min-h-screen w-full text-foreground relative z-10">
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
        {/* Left Side: Image */}
        <motion.div 
          className="lg:col-span-5 h-[50vh] lg:h-full w-full relative p-6 lg:p-12 xl:p-16 flex items-end justify-center lg:items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ y, opacity }}
        >
          <div className="w-full h-full max-h-[85vh] relative overflow-hidden rounded-[16px] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-2xl backdrop-blur-sm">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="lg:col-span-7 h-[50vh] lg:h-full flex flex-col justify-center px-6 lg:px-24 xl:px-32 relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-4">
              ZEVYN TECHNOLOGIES
            </motion.p>
            
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-2 text-foreground">
              {member.name}
            </motion.h1>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 lg:gap-4 mb-8 mt-4">
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                {member.role}
              </h2>
              <span className="flex items-center gap-1.5 bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 px-3 py-1 rounded-full text-sm font-medium">
                <CheckCircle2 size={16} /> Verified Employee
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-x-8 gap-y-8 mt-12 pt-12 border-t border-border">
              <div>
                <p className="text-muted-foreground mb-1 uppercase tracking-wider text-xs font-semibold">Employee ID</p>
                <p className="text-foreground font-medium">{member.employeeId}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 uppercase tracking-wider text-xs font-semibold">Department</p>
                <p className="text-foreground font-medium">{member.department}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 uppercase tracking-wider text-xs font-semibold">Location</p>
                <p className="text-foreground font-medium flex items-center gap-2"><MapPin size={16} className="text-muted-foreground" /> Chennai, India</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 uppercase tracking-wider text-xs font-semibold">Email</p>
                <a href={`mailto:${member.email}`} className="text-foreground font-medium flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail size={16} className="text-muted-foreground" /> {member.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-40 space-y-32 lg:space-y-48">
        
        {/* Section 1: About */}
        <motion.section 
          initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
        >
          <div className="lg:col-span-4">
            <h3 className="text-muted-foreground uppercase tracking-widest text-sm font-semibold sticky top-32">About</h3>
          </div>
          <div className="lg:col-span-8">
            <p className="text-2xl lg:text-4xl text-foreground leading-snug lg:leading-tight font-medium tracking-tight">
              {member.about}
            </p>
          </div>
        </motion.section>

        <hr className="border-border" />

        {/* Section 2: Core Expertise */}
        <motion.section 
          initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
        >
          <div className="lg:col-span-4">
            <h3 className="text-muted-foreground uppercase tracking-widest text-sm font-semibold sticky top-32">Core Expertise</h3>
          </div>
          <div className="lg:col-span-8 flex flex-wrap gap-3">
            {member.skills.map((skill) => (
              <span key={skill} className="px-5 py-3 rounded-full border border-border bg-background text-foreground text-sm font-medium tracking-wide hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        <hr className="border-border" />

        {/* Section 3: Projects */}
        <motion.section 
          initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
        >
          <div className="lg:col-span-4">
            <h3 className="text-muted-foreground uppercase tracking-widest text-sm font-semibold sticky top-32">Projects</h3>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {projects.map((project, idx) => (
              <div key={idx} className="group relative flex flex-col sm:flex-row justify-between items-start sm:items-center p-8 rounded-[16px] bg-background/50 border border-border hover:bg-accent/50 hover:border-accent-foreground/20 transition-all duration-500 backdrop-blur-sm">
                <div>
                  <h4 className="text-xl font-medium text-foreground mb-2">{project.name}</h4>
                  <p className="text-muted-foreground">{project.role}</p>
                </div>
                <div className="mt-4 sm:mt-0 flex items-center gap-4">
                  <span className="text-muted-foreground text-sm font-mono">{project.year}</span>
                  <div className="w-10 h-10 rounded-full bg-border flex items-center justify-center group-hover:bg-primary transition-colors">
                    <ChevronRight size={18} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <hr className="border-border" />

        {/* Section 4: Experience */}
        <motion.section 
          initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
        >
          <div className="lg:col-span-4">
            <h3 className="text-muted-foreground uppercase tracking-widest text-sm font-semibold sticky top-32">Experience</h3>
          </div>
          <div className="lg:col-span-8 relative border-l border-border ml-4 lg:ml-0">
            {experience.map((exp, idx) => (
              <div key={idx} className="mb-12 last:mb-0 pl-8 relative">
                <div className="absolute w-3 h-3 bg-background border-2 border-foreground rounded-full -left-[6.5px] top-1.5" />
                <span className="text-sm font-mono text-muted-foreground mb-2 block">{exp.period}</span>
                <h4 className="text-2xl font-medium text-foreground mb-1">{exp.title}</h4>
                <p className="text-lg text-muted-foreground">{exp.company}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <hr className="border-border" />

        {/* Section 5: Certificates */}
        <motion.section 
          initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
        >
          <div className="lg:col-span-4">
            <h3 className="text-muted-foreground uppercase tracking-widest text-sm font-semibold sticky top-32">Certificates</h3>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, idx) => (
              <div key={idx} className="p-6 rounded-[16px] bg-background/50 border border-border flex items-start gap-4 backdrop-blur-sm">
                <div className="p-3 rounded-xl bg-muted mt-1">
                  <CheckCircle2 size={20} className="text-foreground" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">{cert}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <hr className="border-border" />

        {/* Section 6: Contact */}
        <motion.section 
          initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-20"
        >
          <div className="lg:col-span-4">
            <h3 className="text-muted-foreground uppercase tracking-widest text-sm font-semibold sticky top-32">Connect</h3>
          </div>
          <div className="lg:col-span-8 flex flex-wrap gap-4">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity">
                <Linkedin size={20} /> LinkedIn Profile
              </a>
            )}
            
            {member.github && (
              <a href={member.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-full bg-muted border border-border text-foreground font-medium hover:bg-accent transition-colors">
                <Github size={20} /> GitHub
              </a>
            )}

            {member.website && (
              <a href={member.website} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border border-border text-foreground font-medium hover:bg-accent transition-colors">
                <Globe size={20} /> Personal Site <ExternalLink size={16} />
              </a>
            )}
          </div>
        </motion.section>

      </main>
    </div>
  );
}
