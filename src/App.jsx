import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

function App() {

  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
      <Navbar/>
      <Outlet/>
    </Suspense>
    </>
  )
}

export default App
