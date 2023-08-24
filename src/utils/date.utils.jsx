export const currentMonth = (date) => {
  const currentDate = new Date();
  const dateReverse = date.split("/").reverse();
  const fechaParaVerificar = new Date(dateReverse);

  return (
    currentDate.getFullYear() === fechaParaVerificar.getFullYear() &&
    currentDate.getMonth() === fechaParaVerificar.getMonth()
  );
};
