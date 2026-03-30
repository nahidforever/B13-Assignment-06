import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Stats from "./components/Stats";
import Tools from "./components/Tools";

const fetchTools = async () => {
  const res = await fetch("/tools.json");
  return res.json();
};

const toolsPromise = fetchTools();

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <Stats></Stats>

      <Tools toolsPromise={toolsPromise}></Tools>
    </>
  );
}

export default App;
