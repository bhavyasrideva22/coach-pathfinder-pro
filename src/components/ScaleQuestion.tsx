import { useState } from 'react';
import { QuestionCard } from './QuestionCard';
import { Button } from '@/components/ui/button';

interface ScaleQuestionProps {
  question: string;
  description?: string;
  scale: { value: number; label: string }[];
  onChange: (value: number) => void;
  value?: number;
}

export const ScaleQuestion = ({ question, description, scale, onChange, value }: ScaleQuestionProps) => {
  const [selectedValue, setSelectedValue] = useState<number | undefined>(value);

  const handleSelect = (val: number) => {
    setSelectedValue(val);
    onChange(val);
  };

  return (
    <QuestionCard question={question} description={description}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {scale.map((item) => (
          <Button
            key={item.value}
            variant={selectedValue === item.value ? "default" : "outline"}
            className={`p-4 h-auto flex flex-col items-center space-y-2 transition-all ${
              selectedValue === item.value 
                ? "bg-primary text-primary-foreground shadow-[var(--hero-shadow)]" 
                : "hover:bg-accent"
            }`}
            onClick={() => handleSelect(item.value)}
          >
            <span className="text-2xl font-bold">{item.value}</span>
            <span className="text-xs text-center leading-tight">{item.label}</span>
          </Button>
        ))}
      </div>
    </QuestionCard>
  );
};