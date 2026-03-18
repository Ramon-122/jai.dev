import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Chandigarh University",
    location: "Chandigarh, India",
    period: "2021 – 2023",
    description: "Specialized in Software Engineering with focus on distributed systems and blockchain technologies.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "SRKG College, Sitamarhi",
    location: "Bihar, India",
    period: "2018 – 2021",
    description: "Foundation in computer science, programming, and database management systems.",
  },
];

const EducationSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="education" className="relative py-20">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Academic background and qualifications
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="glass-card-hover p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                {/* Icon */}
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-1 text-xl font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="mb-2 text-primary">{edu.institution}</p>
                  
                  <div className="mb-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
