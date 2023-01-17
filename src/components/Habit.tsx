interface HabitProps {
  completed: number;
}

export function Habit({ completed }: HabitProps) {
  return (
    <h2>{completed}</h2>
  )
}