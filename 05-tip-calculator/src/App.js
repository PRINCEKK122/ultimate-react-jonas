import { useState } from "react";

function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <Rating percentage={percentage1} onSelect={setPercentage1}>How did you like the service</Rating>
      <Rating percentage={percentage2} onSelect={setPercentage2}>How did your friend like the service</Rating>
      <Output bill={bill}/>
      <ResetButton />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function Rating({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={e => onSelect(Number(e.target.value))}>
        <option value="0">Dissatified (0%)</option>
        <option value="5">It was okay</option>
        <option value="10">It was good</option>
        <option value="20">Absolutely amazing!</option>
      </select>
    </div>
  );
}

function Output({bill}) {
  return <h3>You pay X (${bill} + $B tip)</h3>;
}

function ResetButton() {
  return <button>Reset</button>;
}

export default App;
