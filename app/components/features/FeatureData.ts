export interface Feature {
  id: number;
  title: string;
  description: string;
  icon?: any;
}

export const FeatureData: Feature[] = [
  {
    id: 1,
    title: "Modernized C-Inspired Syntax",
    description:
      "Familiar C syntax with modern enhancements for accessibility and power. Streamlined variable and function declarations bring C up to today's standards.",
  },
  {
    id: 2,
    title: "LLVM Integration for Performance",
    description:
      "Leveraging LLVM for optimized code generation, ensuring efficient execution in both native binaries and WebAssembly.",
  },
  {
    id: 3,
    title: "Seamless Standard C Interoperability",
    description:
      "Effortlessly use standard C functions like printf and puts, ensuring easy debugging while enjoying modern syntax.",
  },
];
