import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h4>Total Number of Items</h4>
        </div>
        <div className="col text-center">
          <h4>Items</h4>
          <div className="container">
            <div className="row">
              <div className="col-sm">appetizers</div>
              <div className="col-sm">entrees</div>
              <div className="col-sm">desserts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
