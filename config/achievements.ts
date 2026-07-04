export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

export const stats: Stat[] = [
  { label: "Years of Experience", value: 4, suffix: "+" },
  { label: "Projects Delivered", value: 8, suffix: "+" },
  { label: "Technologies Used", value: 20, suffix: "+" },
  { label: "Applications Maintained", value: 10, suffix: "+" },
];
