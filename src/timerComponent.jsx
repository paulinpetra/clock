import { useState, useEffect } from "react";

//Here I use a Functional component declared with const

const TimerComponent = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds); // I initialize the state variable with the prop thats sets a starting time
  // I use useEffect to create the side effect of the state changing
  useEffect(() => {
    if (seconds <= 0) {
      return;
    } // This clause is for preventing the rest of the code from executing when countdown reaches zero.
    //return without value stops the execution of the function and returns undefined

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1); //passing a function, with the previous state as its argument, to the state update function to update the state based on the previous state
    }, 1000); // Here's the side-effect code that sets up an interval that decrements the state variable.

    return () => clearInterval(timer); //This is the useEffects clean-up function. The identifier returned by setInterval() is stored in the timer variable so this stops the timer associated with the timer variable.
  }, [seconds]); //the dependency for the useEffect is the state variable because it needs to react to that change

  const formatTime = (timeInSeconds) => {
    //this is a helper function for getting a string in the mm:ss format.
    // timeInSeconds in the formatTime function is essentially the current value of the seconds state in the TimerComponent.
    //As the useEffect hook decreases the seconds state every second, timeInSeconds will also decrease, causing the displayed time to count down.

    const minutes = Math.floor(timeInSeconds / 60) //calculating minutes
      .toString() //used to convert the numeric minutes into a string
      .padStart(2, "0"); //ensures that the string is at least 2 characters long and can adds a leading zero
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0"); //Calculating seconds. gives the remainder of timeInSeconds divided by 60, which represents the remaining seconds after accounting for the full minutes.
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>{formatTime(seconds)}</p>
    </div>
  );
  // here the formatTime function is called with the state variable as its argument:
};

export default TimerComponent;
