import "./Goals.css"; // Import CSS file

function Goals() {
  return (
    <div className="goals-container">
      <div className="goals-box">
        <h2 className="goals-title">Goals</h2>
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
              <td><input type="text" placeholder="Protein Goals" /></td>
            </tr>
            <tr>
              <td className="goal-label carb">Carb</td>
              <td><input type="text" placeholder="Carb Goals" /></td>
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

        <div className="goals-chart">
          <div className="circle-chart">
            <p>Goals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
