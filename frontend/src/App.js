import React, { useState } from "react";
import { Button } from "/components/Button";
import { clickButton } from "./services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

toast.configure();

function App() {
  const [counter, setCounter] = useState(0);
  const [userId] = useState("USER_ID"); // Replace with actual user ID

  const handleClick = async () => {
    try {
      const { reward, user } = await clickButton(userId);
      setCounter(user.totalClicks);

      if (reward.points) toast.success(`You earned ${reward.points} points!`);
      if (reward.prize) toast.success("You won a prize!");
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Cookie Clicker</h1>
      <p className="mb-2">Total Clicks: {counter}</p>
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
