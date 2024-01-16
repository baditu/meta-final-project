import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <HomePage />
      </Layout>
    </Router>
  );
}

export default App;
