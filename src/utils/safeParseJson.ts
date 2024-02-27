export const safeParseJson = <Schema>(json: string): Schema | null => {
  try {
    return JSON.parse(json);
  } catch (error) {
    return null;
  }
};
