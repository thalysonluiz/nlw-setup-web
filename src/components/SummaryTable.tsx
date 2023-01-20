import { HabitDay } from "./HabitDay"

const weekDays = [
  'D',
  'S',
  'T',
  'Q',
  'Q',
  'S',
  'S'
]

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
        <HabitDay />
      </div>
    </div>
  )
}