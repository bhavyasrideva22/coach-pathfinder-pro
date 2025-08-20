import { useState } from 'react';
import { QuestionCard } from './QuestionCard';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface Option {
  id: string;
  text: string;
  value: number;
}

interface MultipleChoiceQuestionProps {
  question: string;
  description?: string;
  options: Option[];
  onChange: (selectedId: string, value: number) => void;
  value?: string;
}

export const MultipleChoiceQuestion = ({ 
  question, 
  description, 
  options, 
  onChange, 
  value 
}: MultipleChoiceQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(value);

  const handleSelect = (option: Option) => {
    setSelectedOption(option.id);
    onChange(option.id, option.value);
  };

  return (
    <QuestionCard question={question} description={description}>
      <div className="space-y-3">
        {options.map((option) => (
          <Button
            key={option.id}
            variant="outline"
            className={`w-full p-4 h-auto text-left justify-start transition-all ${
              selectedOption === option.id 
                ? "bg-accent border-primary text-accent-foreground" 
                : "hover:bg-muted"
            }`}
            onClick={() => handleSelect(option)}
          >
            <div className="flex items-center space-x-3 w-full">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedOption === option.id 
                  ? "border-primary bg-primary" 
                  : "border-muted-foreground"
              }`}>
                {selectedOption === option.id && (
                  <CheckCircle className="w-3 h-3 text-primary-foreground" />
                )}
              </div>
              <span className="flex-1">{option.text}</span>
            </div>
          </Button>
        ))}
      </div>
    </QuestionCard>
  );
};