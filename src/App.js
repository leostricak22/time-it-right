import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
      <>
          <Player />
          <div className="challenges">
              <TimerChallenge title="Too easy" targetTime={1} />
              <TimerChallenge title="Easy" targetTime={5} />
              <TimerChallenge title="Medium" targetTime={10} />
              <TimerChallenge title="Hard" targetTime={15} />
          </div>
      </>
  );
}

export default App;
