export interface Question {
  id: string;
  category: 'psychometric' | 'technical' | 'wiscar';
  subcategory: string;
  type: 'scale' | 'multiple' | 'scenario';
  question: string;
  description?: string;
  options?: Array<{
    id: string;
    text: string;
    value: number;
  }>;
  scale?: Array<{
    value: number;
    label: string;
  }>;
}

export const assessmentQuestions: Question[] = [
  // Psychometric Section - Interest
  {
    id: 'psych_interest_1',
    category: 'psychometric',
    subcategory: 'interest',
    type: 'scale',
    question: 'How excited are you about designing learning experiences for others?',
    description: 'Consider your genuine enthusiasm for creating educational content and frameworks.',
    scale: [
      { value: 1, label: 'Not at all interested' },
      { value: 2, label: 'Slightly interested' },
      { value: 3, label: 'Moderately interested' },
      { value: 4, label: 'Very interested' },
      { value: 5, label: 'Extremely interested' }
    ]
  },
  {
    id: 'psych_personality_1',
    category: 'psychometric',
    subcategory: 'personality',
    type: 'multiple',
    question: 'When approaching a new project, which describes you best?',
    description: 'This assesses your cognitive style and approach to work.',
    options: [
      { id: 'structured', text: 'I prefer detailed planning and structured approaches', value: 4 },
      { id: 'flexible', text: 'I like to remain flexible and adapt as I go', value: 3 },
      { id: 'balanced', text: 'I balance structure with flexibility', value: 5 },
      { id: 'spontaneous', text: 'I work best with minimal planning', value: 2 }
    ]
  },
  {
    id: 'psych_empathy_1',
    category: 'psychometric',
    subcategory: 'empathy',
    type: 'scale',
    question: 'How well do you understand others\' learning challenges?',
    description: 'Rate your ability to empathize with learners and their difficulties.',
    scale: [
      { value: 1, label: 'Poor understanding' },
      { value: 2, label: 'Basic understanding' },
      { value: 3, label: 'Good understanding' },
      { value: 4, label: 'Strong understanding' },
      { value: 5, label: 'Exceptional understanding' }
    ]
  },
  {
    id: 'psych_creativity_1',
    category: 'psychometric',
    subcategory: 'creativity',
    type: 'multiple',
    question: 'When solving problems, you typically:',
    options: [
      { id: 'analytical', text: 'Break them down systematically', value: 4 },
      { id: 'creative', text: 'Look for innovative approaches', value: 4 },
      { id: 'collaborative', text: 'Seek input from others', value: 5 },
      { id: 'research', text: 'Research best practices first', value: 3 }
    ]
  },

  // Technical Section
  {
    id: 'tech_design_1',
    category: 'technical',
    subcategory: 'instructional_design',
    type: 'multiple',
    question: 'Which learning theory best describes effective adult learning?',
    description: 'This tests your foundational knowledge of learning principles.',
    options: [
      { id: 'behaviorism', text: 'Behaviorism - learning through rewards and consequences', value: 2 },
      { id: 'cognitivism', text: 'Cognitivism - learning through mental processing', value: 3 },
      { id: 'constructivism', text: 'Constructivism - learners build knowledge actively', value: 4 },
      { id: 'andragogy', text: 'Andragogy - adults learn differently than children', value: 5 }
    ]
  },
  {
    id: 'tech_assessment_1',
    category: 'technical',
    subcategory: 'assessment',
    type: 'multiple',
    question: 'What is the primary purpose of formative assessment in coaching?',
    options: [
      { id: 'grading', text: 'To provide grades and rankings', value: 1 },
      { id: 'feedback', text: 'To give ongoing feedback for improvement', value: 5 },
      { id: 'completion', text: 'To mark program completion', value: 2 },
      { id: 'compliance', text: 'To meet organizational requirements', value: 2 }
    ]
  },
  {
    id: 'tech_scenario_1',
    category: 'technical',
    subcategory: 'scenario',
    type: 'multiple',
    question: 'A client struggles with time management. Your coaching program should:',
    description: 'This scenario tests practical coaching development skills.',
    options: [
      { id: 'generic', text: 'Provide generic time management tips', value: 2 },
      { id: 'assessment', text: 'Start with individual assessment of their specific challenges', value: 5 },
      { id: 'tools', text: 'Immediately introduce time tracking tools', value: 3 },
      { id: 'theory', text: 'Begin with theoretical frameworks', value: 2 }
    ]
  },

  // WISCAR Framework
  {
    id: 'wiscar_will_1',
    category: 'wiscar',
    subcategory: 'will',
    type: 'scale',
    question: 'How committed are you to developing coaching programs as a career?',
    description: 'Rate your genuine drive and motivation for this field.',
    scale: [
      { value: 1, label: 'Not committed' },
      { value: 2, label: 'Somewhat committed' },
      { value: 3, label: 'Moderately committed' },
      { value: 4, label: 'Highly committed' },
      { value: 5, label: 'Completely committed' }
    ]
  },
  {
    id: 'wiscar_skill_1',
    category: 'wiscar',
    subcategory: 'skill',
    type: 'multiple',
    question: 'Rate your current experience with instructional design:',
    options: [
      { id: 'none', text: 'No formal experience', value: 1 },
      { id: 'basic', text: 'Basic understanding, some informal experience', value: 2 },
      { id: 'intermediate', text: 'Some formal training and practical experience', value: 3 },
      { id: 'advanced', text: 'Extensive experience with various design models', value: 4 },
      { id: 'expert', text: 'Expert level with proven track record', value: 5 }
    ]
  },
  {
    id: 'wiscar_cognitive_1',
    category: 'wiscar',
    subcategory: 'cognitive',
    type: 'multiple',
    question: 'When designing a coaching module, you would start by:',
    description: 'This tests your cognitive approach to problem-solving.',
    options: [
      { id: 'content', text: 'Gathering all the content to include', value: 2 },
      { id: 'objectives', text: 'Defining clear learning objectives', value: 5 },
      { id: 'activities', text: 'Brainstorming engaging activities', value: 3 },
      { id: 'timeline', text: 'Creating a delivery timeline', value: 2 }
    ]
  },
  {
    id: 'wiscar_ability_1',
    category: 'wiscar',
    subcategory: 'ability_to_learn',
    type: 'scale',
    question: 'How do you respond to feedback on your work?',
    description: 'This measures your growth mindset and adaptability.',
    scale: [
      { value: 1, label: 'Defensively, feedback is criticism' },
      { value: 2, label: 'Reluctantly, but I listen' },
      { value: 3, label: 'Openly, I appreciate input' },
      { value: 4, label: 'Enthusiastically, I seek feedback' },
      { value: 5, label: 'Proactively, I constantly seek improvement' }
    ]
  },
  {
    id: 'wiscar_real_world_1',
    category: 'wiscar',
    subcategory: 'real_world_alignment',
    type: 'multiple',
    question: 'Which work environment appeals to you most?',
    options: [
      { id: 'corporate', text: 'Corporate L&D department', value: 4 },
      { id: 'consulting', text: 'Coaching consultancy firm', value: 5 },
      { id: 'freelance', text: 'Independent coaching developer', value: 4 },
      { id: 'education', text: 'Educational institution', value: 3 },
      { id: 'nonprofit', text: 'Non-profit organization', value: 3 }
    ]
  }
];

export const calculateScores = (responses: Record<string, number>) => {
  const categories = {
    psychometric: { total: 0, count: 0 },
    technical: { total: 0, count: 0 },
    wiscar: { total: 0, count: 0 }
  };

  const wiscarDimensions = {
    will: { total: 0, count: 0 },
    interest: { total: 0, count: 0 },
    skill: { total: 0, count: 0 },
    cognitive: { total: 0, count: 0 },
    ability_to_learn: { total: 0, count: 0 },
    real_world_alignment: { total: 0, count: 0 }
  };

  Object.entries(responses).forEach(([questionId, value]) => {
    const question = assessmentQuestions.find(q => q.id === questionId);
    if (!question) return;

    // Category scoring
    categories[question.category].total += value;
    categories[question.category].count += 1;

    // WISCAR dimension scoring
    if (question.category === 'wiscar') {
      wiscarDimensions[question.subcategory as keyof typeof wiscarDimensions].total += value;
      wiscarDimensions[question.subcategory as keyof typeof wiscarDimensions].count += 1;
    }
  });

  const psychFit = categories.psychometric.count > 0 
    ? Math.round((categories.psychometric.total / categories.psychometric.count) * 20) 
    : 0;
  
  const techReadiness = categories.technical.count > 0 
    ? Math.round((categories.technical.total / categories.technical.count) * 20) 
    : 0;

  const wiscarScores = Object.entries(wiscarDimensions).reduce((acc, [key, value]) => {
    acc[key] = value.count > 0 ? Math.round((value.total / value.count) * 20) : 0;
    return acc;
  }, {} as Record<string, number>);

  const averageWiscar = Object.values(wiscarScores).reduce((sum, score) => sum + score, 0) / Object.values(wiscarScores).length;
  
  const confidenceScore = Math.round((psychFit + techReadiness + averageWiscar) / 3);

  let recommendation: 'Yes' | 'Maybe' | 'No' = 'No';
  if (confidenceScore >= 75) recommendation = 'Yes';
  else if (confidenceScore >= 55) recommendation = 'Maybe';

  return {
    psychFit,
    techReadiness,
    wiscarScores,
    confidenceScore,
    recommendation
  };
};