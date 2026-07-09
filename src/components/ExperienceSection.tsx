import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Cognizant Technology Solutions",
    location: "Kolkata, India",
    period: "09/2024 – Present",
    description: [
      "Developed blockchain-based solutions using Hyperledger Fabric and Quorum",
      "Design and implement microservices architecture with Spring Boot",
      "Collaborate with cross-functional teams to deliver enterprise applications",
      "Mentor junior developers and conduct code reviews",
    ],
  },
  {
    title: "Software Engineer Trainee",
    company: "Cognizant Technology Solutions",
    location: "Kolkata, India",
    period: "09/2023 – 09/2024",
    description: [
      "Developed full-stack applications using Angular and Spring Boot",
      "Implemented smart contracts on Ethereum and Hyperledger platforms",
      "Created RESTful APIs and integrated with various databases",
      "Participated in Agile ceremonies and sprint planning",
    ],
  },
  {
    title: "Intern",
    company: "Cognizant Technology Solutions",
    location: "Kolkata, India",
    period: "01/2023 – 06/2023",
    description: [
      "Gained hands-on experience with blockchain technologies",
      "Learned enterprise development practices and methodologies",
      "Contributed to proof-of-concept projects",
      "Completed intensive training on Java, Spring, and blockchain fundamentals",
    ],
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="experience" className="relative bg-gradient-dark py-20">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            My professional journey and career progression
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-primary md:left-1/2 md:block md:-translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isVisible ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full w-full origin-top"
              style={{
                background: "linear-gradient(180deg, hsl(217 91% 60%), hsl(270 70% 60%))",
                boxShadow: "0 0 10px hsl(217 91% 60% / 0.5)",
              }}
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-8 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2 md:block">
                  <div className="absolute inset-0 animate-pulse-glow rounded-full" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card-hover p-6">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-primary">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="hidden w-1/2 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
