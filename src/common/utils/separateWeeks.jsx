export function separateWeeks({ weeks }) {
  const separateWeeks = [];

  weeks.forEach((week) => {
    const { id, numero_dia, numero_semana, musculos } = week;

    if (!separateWeeks[numero_semana]) {
      separateWeeks[numero_semana] = [];
    }

    separateWeeks[numero_semana].push({
      id,
      numero_dia,
      numero_semana,
      musculos,
    });
  });
  return separateWeeks;
}
