export const classNames = (...classes: string[]) =>
  classes.filter(Boolean).join(" ");

// function useful for combining classes  for tailwind
// useful for conditional classes
