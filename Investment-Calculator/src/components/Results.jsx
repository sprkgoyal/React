import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const results = calculateInvestmentResults(input);
  console.log(results);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Investment</th>
          <th>Interest</th>
          <th>Annual Investment</th>
          <th>Total Value</th>
        </tr>
      </thead>
      <tbody>
        {results.map((row) => {
          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>
                {formatter.format(
                  row.valueEndOfYear - row.interest - row.annualInvestment
                )}
              </td>
              <td>{formatter.format(row.annualInvestment)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
