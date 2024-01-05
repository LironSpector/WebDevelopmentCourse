import './App.css'
import Chicken from "./Chicken"
import Greeter from "./Greeter"
import Die from "./Die"
import DoubleDice from './DoubleDice'
import Heading from "./Heading"
import ColorList from './ColorList'
import Slots from './Slots'


function App() {
  return (
    <div>
      <Heading color="magenta" text="Welcome" fontSize="20px" />

      <Greeter person="Bill" from="Colt" />
      <Greeter person="Ted" />
      <Greeter from="elton" />

      <DoubleDice />
      <DoubleDice />

      <ColorList colors={["red", "pink", "purple", "teal"]} />

      <Slots val1="🍌" val2="🍌" val3="🍌" />
      <Slots val1="🍌" val2="bla" val3="🍌" />
    </div>
  )
}

export default App
