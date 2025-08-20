import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ResultsChart } from '@/components/ResultsChart';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Download, Share2, TrendingUp, Target, BookOpen, Users } from 'lucide-react';

interface AssessmentResult {
  psychFit: number;
  techReadiness: number;
  wiscarScores: Record<string, number>;
  confidenceScore: number;
  recommendation: 'Yes' | 'Maybe' | 'No';
}

const Results = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<AssessmentResult | null>(null);

  useEffect(() => {
    const storedResults = localStorage.getItem('assessmentResults');
    if (storedResults) {
      const data = JSON.parse(storedResults);
      setResults(data.results);
    } else {
      navigate('/');
    }
  }, [navigate]);

  if (!results) {
    return <div>Loading...</div>;
  }

  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case 'Yes': return 'bg-success text-success-foreground';
      case 'Maybe': return 'bg-warning text-warning-foreground';
      default: return 'bg-destructive text-destructive-foreground';
    }
  };

  const getPersonalInsight = (score: number, rec: string) => {
    if (rec === 'Yes') {
      return "You demonstrate strong coaching development potential with excellent alignment across key dimensions. Your combination of empathy, technical understanding, and growth mindset positions you well for success in this field.";
    } else if (rec === 'Maybe') {
      return "You show promise as a coaching developer with some areas for development. Focus on strengthening your technical foundation and gaining more hands-on experience with instructional design principles.";
    } else {
      return "While coaching development may not be your strongest fit currently, consider related roles in training support, content assistance, or learning coordination that could build relevant experience.";
    }
  };

  const getNextSteps = (rec: string) => {
    if (rec === 'Yes') {
      return [
        "Pursue formal training in ADDIE or Design Thinking methodologies",
        "Create sample coaching frameworks and seek feedback",
        "Connect with experienced coaching professionals for mentorship",
        "Explore e-learning authoring tools and LMS platforms"
      ];
    } else if (rec === 'Maybe') {
      return [
        "Strengthen foundational knowledge in adult learning principles",
        "Practice designing micro-coaching modules",
        "Develop assessment creation skills",
        "Gain experience in learner needs analysis"
      ];
    } else {
      return [
        "Consider roles in training administration or content support",
        "Explore learning and development coordinator positions",
        "Build experience in facilitation and group dynamics",
        "Develop foundational coaching skills as a stepping stone"
      ];
    }
  };

  const wiscarChartData = Object.entries(results.wiscarScores).map(([key, value]) => ({
    name: key.replace('_', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    value
  }));

  const overallScoresData = [
    { name: 'Psychological Fit', value: results.psychFit },
    { name: 'Technical Readiness', value: results.techReadiness },
    { name: 'Overall WISCAR', value: Math.round(Object.values(results.wiscarScores).reduce((sum, score) => sum + score, 0) / Object.values(results.wiscarScores).length) }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="mb-4 flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
            
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4 text-foreground">Your Coaching Developer Assessment Results</h1>
              <div className="flex items-center justify-center space-x-4">
                <Badge className={`px-4 py-2 text-lg ${getRecommendationColor(results.recommendation)}`}>
                  Recommendation: {results.recommendation}
                </Badge>
                <div className="text-2xl font-bold text-primary">
                  {results.confidenceScore}/100
                </div>
              </div>
            </div>
          </div>

          {/* Overall Score Card */}
          <Card className="p-8 mb-8 bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Overall Confidence Score</h2>
              <div className="flex items-center justify-center space-x-6 mb-6">
                <div className="text-4xl font-bold text-primary">{results.confidenceScore}</div>
                <div className="w-64">
                  <Progress value={results.confidenceScore} className="h-4" />
                </div>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {getPersonalInsight(results.confidenceScore, results.recommendation)}
              </p>
            </div>
          </Card>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <ResultsChart
              type="radar"
              data={wiscarChartData}
              title="WISCAR Framework Analysis"
              height={350}
            />
            <ResultsChart
              type="bar"
              data={overallScoresData}
              title="Assessment Category Scores"
              height={350}
            />
          </div>

          {/* Detailed Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Psychological Fit */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Psychological Fit</h3>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{results.psychFit}/100</div>
              <Progress value={results.psychFit} className="mb-3" />
              <p className="text-sm text-muted-foreground">
                Your empathy, creativity, and coaching mindset alignment
              </p>
            </Card>

            {/* Technical Readiness */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-success/10 rounded-lg">
                  <BookOpen className="w-5 h-5 text-success" />
                </div>
                <h3 className="font-semibold text-foreground">Technical Readiness</h3>
              </div>
              <div className="text-3xl font-bold text-success mb-2">{results.techReadiness}/100</div>
              <Progress value={results.techReadiness} className="mb-3" />
              <p className="text-sm text-muted-foreground">
                Your instructional design knowledge and technical skills
              </p>
            </Card>

            {/* Growth Potential */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-warning" />
                </div>
                <h3 className="font-semibold text-foreground">Growth Potential</h3>
              </div>
              <div className="text-3xl font-bold text-warning mb-2">{results.wiscarScores.ability_to_learn}/100</div>
              <Progress value={results.wiscarScores.ability_to_learn} className="mb-3" />
              <p className="text-sm text-muted-foreground">
                Your capacity for continuous learning and adaptation
              </p>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Recommended Next Steps</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-4 text-foreground">Immediate Actions</h3>
                <ul className="space-y-3">
                  {getNextSteps(results.recommendation).map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-medium text-primary">{index + 1}</span>
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-4 text-foreground">Career Paths to Explore</h3>
                <div className="space-y-3">
                  <Badge variant="outline" className="w-full justify-start p-3">
                    Coaching Developer
                  </Badge>
                  <Badge variant="outline" className="w-full justify-start p-3">
                    Instructional Designer (Coaching)
                  </Badge>
                  <Badge variant="outline" className="w-full justify-start p-3">
                    Leadership Development Designer
                  </Badge>
                  <Badge variant="outline" className="w-full justify-start p-3">
                    L&D Content Specialist
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download Results</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Share2 className="w-4 h-4" />
              <span>Share Results</span>
            </Button>
            <Button 
              onClick={() => navigate('/')}
              className="bg-primary hover:bg-primary/90 shadow-[var(--hero-shadow)]"
            >
              Take Assessment Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;