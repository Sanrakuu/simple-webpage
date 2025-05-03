import { useState } from "react";
import "./App.css";

const colors = [
  "#FF5723",
  "#328D32",
  "#F1F40F",
  "#8E41AD",
  "#3498DB",
];

export default function App() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % colors.length);
  return (
    <div className="wrapper" style={{ backgroundColor: colors[index] }}>
      <button onClick={next}>Next color</button>
    </div>
  );
}
