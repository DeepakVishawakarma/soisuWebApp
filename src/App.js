import "./app.css";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Error from "./component/Error";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import ProductDetails from "./component/ProductDetails";

function App() {
  const navigationActive = ({ isActive }) => {
    return {
      color: isActive ? "black" : "black",
      textDecoration: "underline",
      padding: 20,
      fontWeight: "bold",
    };
  };
  return (
    <div>
      <Router>
        {/* Creating the Navigation Link to go from one route to another using the NavLink  */}
        <div style={{ backgroundColor: "powderBlue", padding: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            <span>Soisu</span>
            <nav>
              <NavLink style={navigationActive} to="home">
                Home
              </NavLink>
              <NavLink style={navigationActive} to="contact">
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
