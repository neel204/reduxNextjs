import {
  countReset,
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "@/features/counter/counterSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const [incrementAmount, setIncrementAmount] = useState(0);
  const [decrementAmount, setDecrementAmount] = useState(0);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleResetCount = () => {
    dispatch(countReset());
  };

  const handleIncCount = () => {
    dispatch(incrementByAmount(incrementAmount));
  };

  const handleDecCount = () => {
    dispatch(decrementByAmount(decrementAmount));
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <div>
        <p>Count: {count}</p>
        <div className="flex items-center gap-4 mt-2">
          <button
            className="bg-blue-400 px-4 py-2 text-white rounded-md"
            onClick={handleIncrement}
          >
            +
          </button>
          <button
            className="bg-blue-400 px-4 py-2 text-white rounded-md"
            onClick={handleResetCount}
          >
            Reset
          </button>
          <button
            className="bg-blue-400 px-4 py-2 text-white rounded-md"
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
        <div>
          <div>
            <label>Increment by amount</label>
            <input
              type="number"
              className="m-3 border-2 border-blue-300 rounded-md px-2"
              placeholder="amount"
              onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <button onClick={handleIncCount}>inc</button>
          </div>
          <div>
            <label>Decrement by amount</label>
            <input
              type="number"
              className="m-3 border-2 border-blue-300 rounded-md px-2"
              placeholder="amount"
              onChange={(e) => setDecrementAmount(e.target.value)}
            />
            <button onClick={handleDecCount}>dec</button>
          </div>
        </div>
      </div>
    </main>
  );
}
