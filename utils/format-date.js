export const formatDate = (input) => {
    const date = new Date(Date.parse(input));
    let month = date.toLocaleString('default', { month: 'short' });
    return {
    day: date.getDate(),
    month: month,
    year: date.getFullYear(),
  };
};
