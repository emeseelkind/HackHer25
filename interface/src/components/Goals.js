import "./Goals.css"; // Import CSS
import goalsLogo from "./goalslogo.png"; // Import PNG file

function Goals() {
  return (
    <div className="goals-container">
      <div className="goals-box">
        
        {/* Table Section */}
        <div className="goals-table-container">
          <table className="goals-table">
            <thead>
              <tr>
                <th>Goals:</th>
                <th>Input here:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="goal-label protein">Protein</td>
                <td><input type="text" placeholder="Protein Goals (g)" /></td>
              </tr>
              <tr>
                <td className="goal-label carb">Carb</td>
                <td><input type="text" placeholder="Carb Goals (g)" /></td>
              </tr>
              <tr>
                <td className="goal-label vitamin">Vitamin</td>
                <td><input type="text" placeholder="Vitamin Goals" /></td>
              </tr>
              <tr>
                <td className="goal-label minerals">Minerals</td>
                <td><input type="text" placeholder="Mineral Goals" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Goals Chart */}
        <div className="goals-chart">
          <img src={goalsLogo} alt="Goals Visualization" className="goals-logo" />
        </div>

      </div>
    </div>
  );
}

export default Goals;
