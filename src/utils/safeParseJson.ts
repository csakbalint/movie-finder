// TODO: write some tests to cover edge-cases as well
// we use this method only when parsing cached data, otherwise it's better to handle invalid data
export const safeParseJson = <Schema>(json: string): Schema | null => {
  try {
    return JSON.parse(json);
  } catch (error) {
    return null;
  }
};
