import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AssessmentLayout } from '@/components/AssessmentLayout';
import { ScaleQuestion } from '@/components/ScaleQuestion';
import { MultipleChoiceQuestion } from '@/components/MultipleChoiceQuestion';
import { Button } from '@/components/ui/button';
import { assessmentQuestions, calculateScores } from '@/data/assessmentData';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, number>>({});

  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === assessmentQuestions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  const handleResponse = (questionId: string, value: number) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Calculate results and navigate to results page
      const results = calculateScores(responses);
      localStorage.setItem('assessmentResults', JSON.stringify({
        responses,
        results,
        timestamp: new Date().toISOString()
      }));
      navigate('/results');
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const isCurrentQuestionAnswered = responses[currentQuestion.id] !== undefined;

  const getSectionTitle = () => {
    switch (currentQuestion.category) {
      case 'psychometric':
        return `Psychometric Assessment - ${currentQuestion.subcategory.charAt(0).toUpperCase() + currentQuestion.subcategory.slice(1)}`;
      case 'technical':
        return `Technical Assessment - ${currentQuestion.subcategory.replace('_', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`;
      case 'wiscar':
        return `WISCAR Framework - ${currentQuestion.subcategory.replace('_', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`;
      default:
        return 'Assessment';
    }
  };

  return (
    <AssessmentLayout
      currentStep={currentQuestionIndex + 1}
      totalSteps={assessmentQuestions.length}
      title={getSectionTitle()}
    >
      <div className="space-y-6">
        {currentQuestion.type === 'scale' && currentQuestion.scale && (
          <ScaleQuestion
            question={currentQuestion.question}
            description={currentQuestion.description}
            scale={currentQuestion.scale}
            onChange={(value) => handleResponse(currentQuestion.id, value)}
            value={responses[currentQuestion.id]}
          />
        )}

        {currentQuestion.type === 'multiple' && currentQuestion.options && (
          <MultipleChoiceQuestion
            question={currentQuestion.question}
            description={currentQuestion.description}
            options={currentQuestion.options}
            onChange={(_, value) => handleResponse(currentQuestion.id, value)}
            value={Object.entries(responses).find(([id]) => id === currentQuestion.id)?.[1]?.toString()}
          />
        )}

        <div className="flex justify-between items-center pt-6 border-t">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={isFirstQuestion}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </Button>

          <Button
            onClick={handleNext}
            disabled={!isCurrentQuestionAnswered}
            className="flex items-center space-x-2 bg-primary hover:bg-primary/90 shadow-[var(--hero-shadow)]"
          >
            <span>{isLastQuestion ? 'Get Results' : 'Next'}</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </AssessmentLayout>
  );
};

export default Assessment;