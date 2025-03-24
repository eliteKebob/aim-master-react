export const calculateTopRight = (): { top: number; right: number } => {
  return {
    top: Math.floor(Math.random() * 77) + 20,
    right: Math.floor(Math.random() * 91) + 5,
  };
};
