export type Project = {
    id: number;
    name: string;
    description: string;
    tools: string[];
    role: string;
    code: string;
    demo: string;
    image: string;
    link: Record<string, string>;
  };