export const isValidEmail = (email?: string): boolean => {
  if (!email) {
    return false;
  }

  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

export const isMinimumLength = (field: string, length: number): boolean => {
  return field.trim().length >= length;
};

export const trimToLength = (
  value: string,
  numberOfCharacters: number
): string => {
  return value.trim().slice(0, numberOfCharacters);
};

export function getUniqueTimestamp(): number {
  return Date.now() + Math.random();
}

export const capitalize = (x: string): string => {
  return x.replace(/^\w/, (c) => c.toUpperCase());
};

export const capitalizeAll = (x: string): string => {
  return x
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
};

// date format: "2021-02-05"
export function getCurrentDate(): string {
  const date = new Date();
  const dateString = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
  return dateString;
}
