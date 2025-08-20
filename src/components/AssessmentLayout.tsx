import { ReactNode } from 'react';
import { Progress } from '@/components/ui/progress';

interface AssessmentLayoutProps {
  children: ReactNode;
  currentStep: number;
  totalSteps: number;
  title: string;
}

export const AssessmentLayout = ({ children, currentStep, totalSteps, title }: AssessmentLayoutProps) => {
  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-foreground">Coaching Developer Assessment</h1>
            <span className="text-sm text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border shadow-[var(--card-shadow)] p-8">
            <h2 className="text-xl font-semibold mb-6 text-foreground">{title}</h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};