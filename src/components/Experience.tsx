import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
  {
    title: "Software Engineer",
    company: "Cognizant",
    location: "Bangalore, India",
    period: "June 2023 – Present",
    type: "Engineering",
    description: "Working on microservices-based architecture with Java, Spring Boot, and React, focusing on scalability, performance optimization, and cloud infrastructure.",
    achievements: [
      "Engineered AWS Lambda-based event-driven workflows, reducing manual interventions by 70%",
      "Refactored SQL queries achieving 60% reduction in execution time",
      "Built dynamic React components improving frontend responsiveness by 20%",
      "Implemented CI/CD pipelines using Terraform for AWS Lambda provisioning",
      "Maintained high-traffic systems with <2% downtime through critical hotfixes",
      "Developed RESTful APIs with Spring Boot and JUnit testing",
      "Created React test cases using Jest and React Testing Library"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Cognizant",
    location: "Bangalore, India",
    period: "Feb 2023 – May 2023",
    type: "Engineering",
    description: "Contributed to microservices development using Java, Spring Boot, and frontend technologies while gaining hands-on experience with AWS cloud services.",
    achievements: [
      "Developed microservices using Java and Spring Boot",
      "Optimized SQL queries for improved data retrieval",
      "Built UI components using Angular and TypeScript",
      "Worked with AWS services including ECS and S3"
    ]
  }
];


  const getTypeColor = (type: string) => {
    switch (type) {
      case "Education": return "bg-skill-ai/20 text-skill-ai border-skill-ai/30";
      case "Retail": return "bg-skill-web/20 text-skill-web border-skill-web/30";
      case "Leadership": return "bg-skill-cpp/20 text-skill-cpp border-skill-cpp/30";
      default: return "bg-primary/20 text-primary border-primary/30";
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building leadership skills and practical experience across education, 
            retail, and customer service while developing technical expertise.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden lg:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex-col lg:gap-8`}>
                
                {/* Timeline Dot */}
                <div className="relative lg:flex-shrink-0 order-2 lg:order-none">
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg hidden lg:block"></div>
                </div>

                {/* Content Card */}
                <Card className={`gradient-card p-8 flex-1 group hover:scale-105 transition-all duration-300 ${
                  index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                } order-1 lg:order-none`}>
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge className={`mb-3 ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <div className="space-y-1">
                        <div className="flex items-center text-primary font-semibold">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-5 h-5 text-primary mr-2" />
                      <h4 className="font-semibold">Key Achievements</h4>
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>

                {/* Spacer for alternating layout */}
                <div className="lg:flex-1 hidden lg:block order-3 lg:order-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Skills Developed Through Experience</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Leadership", "Team Management", "Customer Service", "Problem Solving",
              "Data Analysis", "Process Optimization", "Multilingual Communication",
              "Inventory Management", "Training & Mentoring", "Quality Assurance"
            ].map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors px-4 py-2"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;