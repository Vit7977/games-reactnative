export const dateFormatter = (data) => {
  if (!data) return null;

  const date = new Date(data);

  if (isNaN(date.getTime())) return null;

  return date.toLocaleDateString("pt-BR");
};