import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "VCARE",
      description: "Mobile health assistant app that predicts diseases from symptoms and helps schedule doctor visits. Integrates TensorFlow for on-device machine learning-based diagnosis and Firebase for real-time data management.",
      technologies: ["Android", "Java", "Firebase", "Python", "TensorFlow"],
      period: "2022",
      type: "Academic Project",
      highlights: [
        "Predictive disease diagnosis using TensorFlow models",
        "Doctor visit scheduling and patient workflow",
        "Real-time data sync and user management with Firebase"
      ]
    },
    {
      title: "SMARTPARK",
      description: "AI-driven smart parking system combining Android app with image processing for accurate slot detection. Uses OpenCV and C++ for computer vision and Firebase + Java for mobile integration.",
      technologies: ["Android", "Java", "Firebase", "C++", "OpenCV"],
      period: "2020",
      type: "Academic Project",
      highlights: [
        "AI-based slot detection using OpenCV",
        "Reduced parking search time by ~40%",
        "Android app integration for real-time parking status"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Academic Project": return "bg-skill-java/20 text-skill-java border-skill-java/30";
      case "Hackathon Project": return "bg-skill-ai/20 text-skill-ai border-skill-ai/30";
      default: return "bg-primary/20 text-primary border-primary/30";
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning AI, game development, 
            data science, and web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="gradient-card p-8 group hover:scale-105 transition-all duration-300">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className={`mb-3 ${getTypeColor(project.type)}`}>
                    {project.type}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.period}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="bg-background/50 border-primary/30 text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button variant="hero" size="lg">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;