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

// Type-safe CSS custom properties for decorative-border class
// This interface extends React.CSSProperties, allowing both:
// - CSS custom properties (--border-radius, --border-gradient, etc.) for the decorative border
// - Standard CSS properties (borderRadius, padding, etc.) from React.CSSProperties
export interface DecorativeBorderStyles extends React.CSSProperties {
  '--border-radius'?: string;
  '--border-gradient'?: string;
  '--border-opacity'?: string;
  '--inner-radius-offset'?: string;
  '--overlay-gradient'?: string;
}
