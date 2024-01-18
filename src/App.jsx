import { useState, useEffect } from "react";
import Clock from "./clockComponent";
import TimerComponent from "./timerComponent";

import "./App.css";

function App() {
  return (
    <>
      <div className="clocks">
        <Clock city="Stockholm" timezone="Europe/Stockholm" />
        <Clock city="Seoul" timezone="Asia/Seoul" />
      </div>
      <div className="timers">
        <TimerComponent initialSeconds={300} />
        <TimerComponent initialSeconds={600} />
        <TimerComponent initialSeconds={1200} />
      </div>
    </>
  );
}

export default App;
