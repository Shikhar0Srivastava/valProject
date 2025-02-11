import {BrowserRouter, Routes, Route} from "react-router-dom";
import { First } from "./pages/First"
import { NotHer } from "./pages/NotHer"
import { Propose } from "./pages/Propose"
import { Accept } from "./pages/Accept";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<First/>}></Route>
        <Route path="/notHer" element={<NotHer/>}/>
        <Route path="/yesHer" element={<Propose/>}/>
        <Route path="/accepted" element={<Accept/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
