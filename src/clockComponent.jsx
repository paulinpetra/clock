import { useState, useEffect } from "react";

// Here I use the traditional function component just for practice (I will not mix them in the same project in the future)

function Clock({ city, timezone }) {
  //the props are destructured objects
  // here I set the initial value of the state variable to the current time and date
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    //in the useEffect I use setInterval to execute code with a fixed time delay.
    // setinterval also returns an interval ID.
    const interval = setInterval(() => {
      setTime(new Date()); // the code to execute is the sate function that sets current time (useEffect is reacting to the state)
    }, 1000); //the delay in ms

    return () => clearInterval(interval); //this is the claean-up part of useEffect, it calls clearInterval with the interval ID
  }, []); //this dependency array of the useEffect is empty so useEffect will only run on mount.
  //it will continue to run every second due to the setInterval call.
  //This is suitable for setting up an interval that runs continuously and doesn't need to react to any changes in props or state.

  return (
    <div>
      <h2>{city}</h2>
      <p>{time.toLocaleTimeString("en-GB", { timeZone: timezone })}</p>
    </div>
  );
}

// In the return I convert the time to a string using the specified locale.
// The second argument passed to toLocaleTimeString() specifies the time zone to be used. The value of the prop timezone should be a valid time zone.

export default Clock;
