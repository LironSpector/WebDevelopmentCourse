import "./App.css";
import Counter from "./Counter";
import Dumbo from "./Dumbo";
import ScoreKeeper from "./ScoreKeeper";
import EmojiClicker from "./EmojiClicker";
import ScoreKeeperExercise from "./ScoreKeeperExercise";

function App() {
  return (
    <>
      {/* <h1>State Demo</h1> */}

      {/* <Counter /> */}

      {/* <Dumbo /> */}

      {/* <ScoreKeeper /> */}

      {/* <EmojiClicker /> */}

      <div>
        <ScoreKeeperExercise numPlayers={5} target={5} />
      </div>
    </>
  );
}

export default App;
