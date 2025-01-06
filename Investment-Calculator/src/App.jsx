import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

const INITIAL_CAPITAL = {
  initialInvestment: 10000,
  annualInvestment: 300,
  expectedReturn: 6,
  duration: 12,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_CAPITAL);
  const isValidInput = userInput.duration > 0;

  function handleOnUserInput(type, value) {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [type]: value,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput values={userInput} onUserInput={handleOnUserInput} />
      {isValidInput && <Results input={userInput} />}
      {!isValidInput && <p className="center">Duration must be a positive value!</p>}
    </>
  );
}

export default App;
