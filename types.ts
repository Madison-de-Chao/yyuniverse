
export enum StepId {
  DOUBT = 'doubt',
  COST = 'cost',
  PREP = 'prep',
  DECONSTRUCT = 'deconstruct',
  VERIFY = 'verify',
  RECONSTRUCT = 'reconstruct',
  REFLECT = 'reflect',
  CONCLUDE = 'conclude'
}

export interface LogicStep {
  id: StepId;
  title: string;
  question: string;
  description: string;
  element: 'metal' | 'wood' | 'water' | 'fire' | 'earth' | 'gold';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export enum LogicLayer {
  EMOTION = 'emotion',
  LANGUAGE = 'language',
  STRUCTURE = 'structure'
}

export interface LayerAnalysis {
  layer: LogicLayer;
  content: string;
}

export type Theme = 'dark' | 'light';

export type PageId = 'home' | 'logic' | 'chat' | 'guide' | 'sanctuary' | 'about' | 'system' | 'system-a' | 'system-b' | 'system-c' | 'system-05' | 'whitepaper' | 'origins' | 'principles' | 'script';
