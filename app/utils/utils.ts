export const getFirstLetter = (word: string) => {
  return word.charAt(0).toLocaleUpperCase();
};

export const randomizeColor = (): string => {
  const colors = [
    "bg-purple-600",
    "bg-blue-600",
    "bg-sky-600",
    "bg-teal-600",
    "bg-yellow-600",
    "bg-red-600",
    "bg-pink-600",
    "bg-green-600",
    "bg-indigo-600",
    "bg-orange-600",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};
