import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTilt } from "@/hooks/useTilt";
import { Skeleton } from "@/components/ui/skeleton";
import { Code, Server, Database, Cloud, Link2 } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Java", "JavaScript", "TypeScript", "Python"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frameworks",
    icon: Server,
    skills: ["Spring Boot", "Angular", "React.js", "Node.js", "REST APIs"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Blockchain",
    icon: Link2,
    skills: ["Hyperledger Fabric", "Ethereum", "Quorum", "Corda", "Solidity"],
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "CouchDB", "MySQL", "Redis"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "Azure DevOps"],
    color: "from-indigo-500 to-violet-500",
  },
];

interface SkillCardProps {
  category: typeof skillCategories[0];
  index: number;
  isVisible: boolean;
}

const SkillCard = ({ category, index, isVisible }: SkillCardProps) => {
  const tilt = useTilt(10, 1.02);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      ref={tilt.ref}
      style={tilt.style}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="glass-card-hover cursor-pointer p-6"
    >
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${category.color}`}>
        <category.icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mb-4 text-lg font-semibold text-foreground">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/20 hover:text-primary"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSkeleton = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="glass-card p-6">
        <Skeleton className="mb-4 h-12 w-12 rounded-lg" />
        <Skeleton className="mb-4 h-6 w-32" />
        <div className="flex flex-wrap gap-2">
          {[...Array(4)].map((_, j) => (
            <Skeleton key={j} className="h-6 w-16 rounded-full" />
          ))}
        </div>
      </div>
    ))}
  </div>
);

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="relative py-20">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {isLoading ? (
          <SkillsSkeleton />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.title}
                category={category}
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

export default SkillsSection;
