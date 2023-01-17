import './styles/global.css'
import { Habit } from "./components/Habit"


function App() {


  return (
    <>
      <Habit completed={1} />
      <Habit completed={5} />
      <Habit completed={6} />
    </>
  )
}

export default App
