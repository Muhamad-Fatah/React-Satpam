import "bootstrap/dist/css/bootstrap.min.css"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import axios from "axios"
import { useCookies } from "react-cookie"
// Import Pages
import Login from "./pages/Login"
import Home from "./pages/Home"
import DataTables from "./components/DataTables"

const App = () => {

  const [cookies] = useCookies(["accessToken"])
  axios.defaults.headers.common = { Authorization: `Bearer ${cookies.accessToken}` }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tables" element={<DataTables />} />
      </Routes>
    </Router>
  )
}

export default App