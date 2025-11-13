// Import React to enable JSX
import React from "react";

// Import Redux hooks for reading from and writing to the store
import { useSelector, useDispatch } from "react-redux";

// Import the action creator from your slice
import { setMessage } from "../store/exampleSlice";

// Define and export the Home component
export default function Home() {
  // useSelector lets you read a value from the Redux store
  const message = useSelector((state) => state.example.message);

  // useDispatch gives you the dispatch function to send actions
  const dispatch = useDispatch();

  // Render the message and a button that updates it
  return (
    <div>
      {/* Displays the current message from Redux state */}
      <h1>{message}</h1>

      {/* When clicked, dispatches the setMessage action to update state */}
      <button onClick={() => dispatch(setMessage("Redux is working!"))}>
        Change Message
      </button>
    </div>
  );
}

/*
🧠 Quick summary:
- This component reads data from Redux (via `useSelector`).
- It updates data by dispatching an action (`setMessage`).
- `exampleSlice.js` defines the reducer and action that control this behavior.

✅ When you click the button, it triggers `dispatch(setMessage("Redux is working!"))`,
   updating the store, which re-renders this component with the new message.
*/
