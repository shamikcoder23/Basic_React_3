import "./styles.css";
import * as cal from "./calculator";

export default function App() {
  return (
    <div className="App">
      <ul>
        <li>{cal.add(1, 2)}</li>
        <li>{cal.sub(7, 2)}</li>
        <li>{cal.mul(2, 3)}</li>
        <li>{cal.div(5, 2)}</li>
      </ul>
    </div>
  );
}
