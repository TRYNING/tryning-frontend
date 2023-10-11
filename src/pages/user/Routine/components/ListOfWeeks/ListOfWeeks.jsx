//import { separateWeeks } from "@common/utils/separateWeeks";
import { CardWeek } from "../CardWeek/CardWeek";

export function ListOfWeeks({ weeks }) {
  // const filteredWeeks = separateWeeks({ weeks });
  return (
    <div className="flex flex-col gap-5">
      {weeks?.map((week, i) => {
        const key = crypto.randomUUID();
        return <CardWeek key={key} week={week} number={i + 1} />;
      })}
    </div>
  );
}
