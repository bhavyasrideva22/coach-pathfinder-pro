import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Target, Users, BookOpen, TrendingUp } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Psychometric Analysis",
      description: "Assess your personality traits, empathy, and coaching mindset alignment"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Technical Readiness",
      description: "Evaluate your instructional design knowledge and technical capabilities"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "WISCAR Framework",
      description: "Comprehensive analysis of Will, Interest, Skill, Cognitive readiness, Ability to learn, and Real-world alignment"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Guidance",
      description: "Personalized recommendations and next steps for your coaching development journey"
    }
  ];

  const careerPaths = [
    "Coaching Developer",
    "Instructional Designer (Coaching)",
    "Leadership Development Designer",
    "L&D Content Specialist",
    "Learning Strategist"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-primary-glow/10">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Pathfinder Series Assessment
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6 text-foreground leading-tight">
              Should I Become a{' '}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Coaching Developer?
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover your potential in designing, delivering, and refining coaching programs. 
              Get a comprehensive assessment of your psychological fit, technical readiness, and career alignment.
            </p>
            
            <Button 
              onClick={() => navigate('/assessment')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-[var(--hero-shadow)] hover:shadow-[var(--glow-shadow)] transition-all duration-300"
            >
              Start Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              ⏱️ Takes 20-30 minutes • 🎯 Science-based evaluation • 📊 Detailed insights
            </p>
          </div>
        </div>
      </section>

      {/* What is a Coaching Developer */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              What is a Coaching Developer?
            </h2>
            
            <Card className="p-8 shadow-[var(--card-shadow)]">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A Coaching Developer is a professional who crafts comprehensive coaching curricula, 
                develops coaching materials, and creates delivery frameworks that enable individuals 
                and organizations to grow. This role blends psychological insights with instructional 
                design expertise.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Key Responsibilities</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span>Design coaching sequences and programs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span>Create assessments and evaluation tools</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span>Develop supporting resources and materials</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                      <span>Facilitate practical implementation</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Essential Traits</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Strong coaching mindset and empathy</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Instructional design capability</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Psychological understanding</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Creativity and structured thinking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Comprehensive Assessment Framework
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 transition-all hover:shadow-[var(--card-shadow)] hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-foreground">
              Explore Career Opportunities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {careerPaths.map((path, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="p-4 text-center justify-center bg-card hover:bg-accent transition-colors"
                >
                  {path}
                </Badge>
              ))}
            </div>
            
            <div className="mt-12">
              <Button 
                onClick={() => navigate('/assessment')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 shadow-[var(--hero-shadow)]"
              >
                Discover Your Path
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
