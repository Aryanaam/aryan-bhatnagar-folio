import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, Building } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      issuer: "Oracle University",
      date: "Aug 2025",
      description: "Advanced certification in cloud-based data science, machine learning, and analytics on Oracle Cloud Infrastructure platform.",
      skills: ["Cloud Computing", "Data Science", "Machine Learning", "Oracle Cloud"],
      image: "/placeholder-cert-oracle.jpg"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud & Simplilearn",
      date: "Aug 2025",
      description: "Comprehensive understanding of generative AI technologies, applications, and implementation strategies.",
      skills: ["Generative AI", "Machine Learning", "AI Applications"],
      image: "/placeholder-cert-google.jpg"
    },
    {
      title: "Career Essentials in Data Analysis by Microsoft and LinkedIn",
      issuer: "LinkedIn Learning & Microsoft",
      date: "Aug 2025",
      description: "Essential skills for data analysis career path covering tools, techniques, and best practices in the industry.",
      skills: ["Data Analysis", "Data Visualization", "Data Analytics"],
      image: "/placeholder-cert-linkedin-ms.jpg"
    },
    {
      title: "Introduction to Career Skills in Data Analytics", 
      issuer: "LinkedIn Learning",
      date: "Aug 2025",
      description: "Foundational skills in data analytics including career development and technical competencies.",
      skills: ["Data Analytics", "Tech Career Skills"],
      image: "/placeholder-cert-linkedin.jpg"
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Quantium & Forage",
      date: "July 2025",
      description: "Practical experience in data preparation, customer analytics, experimentation, uplift testing, and analytics for commercial application.",
      skills: ["Data Preparation", "Customer Analytics", "A/B Testing", "Commercial Analytics"],
      image: "/placeholder-cert-quantium.jpg"
    },
    {
      title: "Data Science & Analytics",
      issuer: "HP LIFE & HP Foundation",
      date: "July 2025", 
      description: "Leading data science and analytics practices, methodologies, and tools, examined the benefits and challenges of a data-driven approach for businesses.",
      skills: ["Data Science", "Business Analytics", "Data-Driven Decisions"],
      image: "/placeholder-cert-hp.jpg"
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte & Forage",
      date: "July 2025",
      description: "Practical tasks in data analysis and forensic technology, gaining knowledge about essential skills needed to pursue a career in the field.",
      skills: ["Data Analysis", "Forensic Technology"],
      image: "/placeholder-cert-deloitte.jpg"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Certifications & Training</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in data science and analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="gradient-card shadow-card hover:shadow-elegant transition-all duration-300 group overflow-hidden">
              <div className="relative">
                {/* Certificate Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/30 transition-all">
                  <div className="text-center">
                    <Award className="w-16 h-16 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm text-muted-foreground font-medium">Certificate</p>
                  </div>
                </div>
                
                {/* Date Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-primary">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.date}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Building className="w-4 h-4" />
                    <span className="text-sm font-medium">{cert.issuer}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold mb-2">Skills Covered</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs border-primary/30 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full group/btn mt-4">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
            <Award className="w-8 h-8 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold text-lg">Professional Certified</h3>
              <p className="text-muted-foreground">7+ Industry-recognized certifications in Data Science & Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};