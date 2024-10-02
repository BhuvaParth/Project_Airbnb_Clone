import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";

function App() {
  return (
    <>
      <ClientOnly />
    </>
  );
}

export default App;
