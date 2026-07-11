import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTilt } from "@/hooks/useTilt";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Digital Vault",
    subtitle: "Digital Trust Platform",
    description:
      "Enterprise-grade digital trust platform for Telecommunications and Digital Government Regulatory Authority. Implements secure document management and verification using Quorum blockchain.",
    technologies: ["Quorum", "Spring Boot", "Angular", "PostgreSQL","Kibana"],
    highlights: ["Private blockchain network", "Document verification", "Government compliance"],
  },
  {
    title: "Automatic Sanity Checker",
    subtitle: "Automated Testing Tool",
    description:
      "Automated testing tool to validate API endpoints against predefined API contracts, automate sanity testing, generate comprehensive test reports, and distribute results to stakeholders.",
    technologies: ["Angular", "Spring Boot", "MongoDB", "AWS AI Features"],
    highlights: ["Automate testing", "Report generation", "Strict to API contracts"],
  },
  {
    title: "Asset Cover Management",
    subtitle: "Hyperledger Fabric Solution",
    description:
      "Decentralized asset management system built on Hyperledger Fabric for tracking and managing asset coverage across multiple organizations with complete audit trails.",
    technologies: ["Hyperledger Fabric", "Node.js","Spring Boot", "CouchDB", "React", "Docker"],
    highlights: ["Multi-org network", "Smart contracts", "Real-time tracking"],
  },
  {
    title: "Banking Application",
    subtitle: "Banking Platform",
    description:
      "Secure banking application using spring boot microservices capability for inter-bank settlements and loan syndication with regulatory compliance.",
    technologies: ["Spring Boot", "Angular", "Oracle DB"],
    highlights: ["Microservices architecture", "Regulatory compliance", "Inter-bank settlements"],
  },

];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isVisible: boolean;
}

const ProjectCard = ({ project, index, isVisible }: ProjectCardProps) => {
  const tilt = useTilt(8, 1.02);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      ref={tilt.ref}
      style={tilt.style}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="glass-card-hover group cursor-pointer overflow-hidden"
    >
      {/* Header */}
      <div className="relative p-6 pb-0">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Folder className="h-6 w-6 text-primary" />
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: -10 }}
            className="opacity-0 transition-opacity group-hover:opacity-100"
          >
            <ExternalLink className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </div>
        <h3 className="mb-1 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mb-3 text-sm text-secondary">{project.subtitle}</p>
      </div>

      {/* Description */}
      <div className="px-6 py-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>

      {/* Highlights */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-2">
          {project.highlights.map((highlight) => (
            <span
              key={highlight}
              className="text-xs text-primary/80"
            >
              ✦ {highlight}
            </span>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="border-t border-border/50 p-6 pt-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-muted/50 text-xs hover:bg-primary/20"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSkeleton = () => (
  <div className="grid gap-6 md:grid-cols-2">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="glass-card overflow-hidden">
        <div className="p-6 pb-0">
          <Skeleton className="mb-4 h-12 w-12 rounded-lg" />
          <Skeleton className="mb-2 h-6 w-48" />
          <Skeleton className="mb-4 h-4 w-32" />
        </div>
        <div className="px-6 py-4">
          <Skeleton className="mb-2 h-4 w-full" />
          <Skeleton className="mb-2 h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="border-t border-border/50 p-6 pt-4">
          <div className="flex gap-2">
            {[...Array(4)].map((_, j) => (
              <Skeleton key={j} className="h-6 w-16 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="relative py-20">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Showcasing enterprise blockchain solutions and web applications
          </p>
        </motion.div>

        {isLoading ? (
          <ProjectsSkeleton />
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
