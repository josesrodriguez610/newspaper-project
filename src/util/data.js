export const navOptions = [
  "coronavirus",
  "news",
  "sports",
  "entertainment/life",
  "opinion",
  "obituaries",
  "classifieds",
  "jobs",
  "homes",
  "games",
  "store",
];

export const stringCut = (string) =>
  string !== null ? string.replace(/\[(.*?)\]/i, "") : null;
