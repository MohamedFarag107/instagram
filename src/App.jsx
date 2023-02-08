import { Route, Routes } from "react-router-dom"
import Signin from "./pages/Signin"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
    </Routes>
  )

}

export default App