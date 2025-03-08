import "./Intake.css"; // Import CSS

function Intake() {
  return (
    <div className="intake-container">
      <div className="intake-box">
        
        {/* Table Section */}
        <div className="intake-table-container">
          <h2 className="intake-title">Today's Food Intake:</h2>
          <table className="intake-table">
            <tbody>
              <tr>
                <td>Chicken</td>
                <td>25</td>
              </tr>
              <tr>
                <td>Rice</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Carrots</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>

          {/* Total Section */}
          <div className="intake-total">
            <span>Total:</span>
            <span className="total-box">35</span>
          </div>
        </div>

        {/* Circular Progress Chart */}
        <div className="intake-chart">
          <div className="progress-circle">
            <p>Total</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Intake;
