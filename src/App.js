import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Adduser from "./Component/Adduser";
import ShowData from "./Component/ShowData";
import Update from "./Component/Update";
import Error from "./Component/Error";
import View from "./Component/View";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes><Route path="/" element={<Home/>}/>
        <Route path="/addexp" element={<Adduser/>}/>
        <Route path="/showExp" element={<ShowData/>}/>
        <Route path="/update/:ex_id" element={<Update/>}/>
        <Route path="/View/:ex_id" element={<View />}/>
        <Route path="*" element={<Error/>}/>
       
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
