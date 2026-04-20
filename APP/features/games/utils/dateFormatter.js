export const dateFormatter = (data) => {
  if (!data) return null;

  const date = new Date(data);
  if (isNaN(date.getTime())) return null;

  const datePart = date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  });

  const timePart = date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  });

  return {
    date: datePart,
    time: timePart,
    datetime: `${datePart} ${timePart}`,
  };
};