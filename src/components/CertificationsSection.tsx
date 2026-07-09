import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Certified Blockchain Expert",
    issuer: "Blockchain Council",
    description: "Comprehensive certification covering blockchain fundamentals, consensus mechanisms, and enterprise applications",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AWS AI Practitioner",
    issuer: "Amazon Web Services",
    description: "AWS AI/ML services, cloud architecture, and practical AI implementation",
    color: "from-orange-500 to-yellow-500",
  },
];

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="certifications" className="relative bg-gradient-dark py-20">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Professional certifications validating my expertise
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card-hover group cursor-pointer p-6"
            >
              {/* Icon */}
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${cert.color} shadow-lg`}>
                <Award className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="mb-1 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {cert.title}
              </h3>
              <p className="mb-3 text-sm text-secondary">{cert.issuer}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {cert.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                <span>View credential</span>
                <ExternalLink className="h-3 w-3" />
              </div>

              {/* Glow effect on hover */}
              <div className={`absolute inset-0 -z-10 rounded-xl bg-gradient-to-br ${cert.color} opacity-0 blur-xl transition-opacity group-hover:opacity-20`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
