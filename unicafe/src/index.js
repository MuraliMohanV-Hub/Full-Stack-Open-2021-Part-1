import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ text, value, percent }) => (
  <tr>
    <td>{text}</td>
    <td>
      {value}
      {percent}
    </td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const positive = (good * 100) / all;
  const average = (good - bad) / all;
  const feedback = (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} percent=" %" />
      </tbody>
    </table>
  );
  const noFeedback = (
    <div>
      <p>No FeedBack Given</p>
    </div>
  );

  return all === 0 ? noFeedback : feedback;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Provide FeedBack</h1>
      <Button handleClick={increaseGood} text="Good" />
      <Button handleClick={increaseNeutral} text="Neutral" />
      <Button handleClick={increaseBad} text="Bad" />
      <h1>Statistics</h1>
      <Statistics Good={good} Neutral={neutral} Bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
