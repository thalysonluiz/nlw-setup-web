import { HabitDay } from "./HabitDay"
import { generateDatesFromYearBegginning } from '../utils/generate-dates-from-year-begginning';

const weekDays = [
  'D',
  'S',
  'T',
  'Q',
  'Q',
  'S',
  'S'
]

const summaryDates = generateDatesFromYearBegginning();

const minimumSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

//console.log(summaryDates);

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, index) => {
          return (
            <div
              key={`${weekDay}-${index}`}
              className="text-zinc-400 flex items-center justify-center text-xl font-bold w-10 h-10 rounded-md"
            >
              {weekDay}
            </div>
          )
        })}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((date, index) => {
          return (
            <HabitDay key={date.toString()} />
          )
        })}

        {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, i) => {
          return (
            <div
              key={i}
              className="bg-zinc-900 border-2 border-zinc-800 w-10 h-10 rounded-lg opacity-40 cursor-not-allowed">

            </div>
          )
        })}
      </div>
    </div>
  )
}