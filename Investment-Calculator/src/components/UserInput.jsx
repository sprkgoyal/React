const INITIAL_CAPITAL = {
  "initial-investment": 10000,
  "annual-investment": 300,
  "expected-return": 6,
  duration: 12,
};

export default function UserInput({ values, onUserInput }) {
  return (
    <section id="user-input">
      <form>
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              value={values["initialInvestment"]}
              id="initial-investment"
              onChange={(state) =>
                onUserInput("initialInvestment", state.target.value)
              }
              required
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              value={values["annualInvestment"]}
              id="annual-investment"
              onChange={(state) =>
                onUserInput("annualInvestment", state.target.value)
              }
              required
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return (%)</label>
            <input
              type="number"
              value={values["expectedReturn"]}
              id="expected-return"
              onChange={(state) =>
                onUserInput("expectedReturn", state.target.value)
              }
              required
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              value={values["duration"]}
              id="duration"
              onChange={(state) => onUserInput("duration", state.target.value)}
              required
            />
          </p>
        </div>
      </form>
    </section>
  );
}
