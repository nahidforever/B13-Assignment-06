import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Stats from "./components/Stats";
import Tools from "./components/Tools";
import Cart from "./components/Cart";

const fetchTools = async () => {
  const res = await fetch("/tools.json");
  return res.json();
};

const toolsPromise = fetchTools();

function App() {
  const [activeTab, setActiveTab] = useState("products");

  const [carts, setCarts] = useState([]);

  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <Stats></Stats>

      <div className="mt-30">
        <div className="text-center ">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#101727]">
            Premium Digital Tools
          </h2>
          <p className="text-[#627382] mt-4">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.
          </p>
        </div>

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box justify-center bg-transparent mt-4">
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab text-black ${activeTab === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white" : ""}`}
            aria-label="Products"
            defaultChecked
            onClick={() => setActiveTab("products")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab text-black ${activeTab === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white" : ""}`}
            aria-label="Cart (2)"
            onClick={() => setActiveTab("cart")}
          />
        </div>
      </div>

      {activeTab === "products" && (
        <Tools
          toolsPromise={toolsPromise}
          carts={carts}
          setCarts={setCarts}
        ></Tools>
      )}

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
    </>
  );
}

export default App;
