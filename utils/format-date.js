export const formatDate = (input) => {
  const date = new Date(Date.parse(input));

  return {
    day: date.getDate(),
    month: date.toLocaleString('default', { month: 'short' }),
    year: date.getFullYear(),
  };
};
