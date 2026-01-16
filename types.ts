
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Program {
  title: string;
  age: string;
  description: string;
  image: string;
}

export interface Routine {
  title: string;
  description: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
}