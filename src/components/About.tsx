import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Brain, Users } from "lucide-react";

const About = () => {
  const skills = {
    "Languages & Core": ["Java", "Python", "TypeScript", "HTML", "CSS"],
    "Backend": ["Spring Boot", "Node.js", "REST APIs", "Microservices"],
    "Frontend": ["React", "Angular"],
    "Cloud & DevOps": ["AWS", "Docker", "Terraform", "Git", "GitLab"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"],
    "Other": ["Data Structures & Algorithms", "Design Patterns", "Agile"]
  };

  const education = [
    {
      degree: "Masters in Computer Applications",
      school: "APJ Abdul Kalam Technological University",
      location: "Kerala, India",
      period: "Nov 2020 - Aug 2022",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Bachelors in Computer Applications",
      school: "University of Mysore",
      location: "Mysore, India", 
      period: "July 2017 - Sept 2020",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A dedicated Software Engineer with a passion for building scalable solutions 
            and expertise in full-stack development, focused on delivering high-performance applications.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-6">
            <div className="gradient-card p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">My Journey</h3>
              </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a Software Engineer specializing in Java, Spring Boot, and Microservices architecture. 
                With hands-on experience in both backend and frontend development, I've contributed to 
                building scalable and high-performance applications.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                My expertise includes developing AWS Lambda-based workflows, optimizing SQL queries, 
                and creating responsive React components. I've successfully improved system performance, 
                reducing query execution times by 60% and enhancing frontend user experience with a 20% 
                reduction in bounce rates.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                I'm passionate about DevOps practices, working with CI/CD pipelines, and implementing 
                automated testing. My experience in SAFe Agile environments has equipped me with strong 
                project delivery and team collaboration skills. I consistently strive to maintain system 
                reliability, ensuring less than 2% downtime in high-traffic environments.
                </p>
            </div>

            {/* Education */}
            <div className="gradient-card p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.school}</p>
                      <p className="text-muted-foreground text-sm">{edu.location}</p>
                      <p className="text-muted-foreground text-sm">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <div className="gradient-card p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Brain className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
              </div>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold mb-3 text-lg">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="gradient-card p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-gradient mb-2">4+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="gradient-card p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-gradient mb-2">2+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;