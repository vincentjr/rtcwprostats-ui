import { parse, parseISO } from "date-fns";

export const toList = <T>(obj: Record<string, T>) => {
  return Object.entries(obj).map(([_, value]) => value);
};

export const dateStringToDate = (input: string) => {
  const d = parse(input + '+00', "yyyy-MM-dd HH:mm:ssX", new Date());
  return d;
};

export const dateStringISOToDate = (input: string) => {
  const d = parseISO(input);
  return d;
};
