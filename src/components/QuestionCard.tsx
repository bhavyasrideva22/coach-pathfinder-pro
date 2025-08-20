import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface QuestionCardProps {
  children: ReactNode;
  question: string;
  description?: string;
  className?: string;
}

export const QuestionCard = ({ children, question, description, className = "" }: QuestionCardProps) => {
  return (
    <Card className={`p-6 mb-6 transition-all hover:shadow-[var(--card-shadow)] ${className}`}>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-foreground mb-2">{question}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="space-y-3">
          {children}
        </div>
      </div>
    </Card>
  );
};